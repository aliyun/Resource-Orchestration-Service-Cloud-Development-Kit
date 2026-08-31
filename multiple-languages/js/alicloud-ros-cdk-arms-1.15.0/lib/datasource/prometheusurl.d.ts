import * as ros from '@alicloud/ros-cdk-core';
import { RosPrometheusUrl } from './arms.generated';
export { RosPrometheusUrl as PrometheusUrlProperty };
/**
 * Properties for defining a `PrometheusUrl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
 */
export interface PrometheusUrlProps {
    /**
     * Property clusterId: Cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `PrometheusUrl`.
 */
export interface IPrometheusUrl extends ros.IResource {
    readonly props: PrometheusUrlProps;
    /**
     * Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable | string;
    /**
     * Attribute ClusterType: Cluster type.
     */
    readonly attrClusterType: ros.IResolvable | string;
    /**
     * Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
     */
    readonly attrGrafanaUrl: ros.IResolvable | string;
    /**
     * Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
     */
    readonly attrInternetGrafanaUrl: ros.IResolvable | string;
    /**
     * Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
     */
    readonly attrInternetOpenTelemetryUrl: ros.IResolvable | string;
    /**
     * Attribute InternetPushGatewayUrl: Internet push gateway URL.
     */
    readonly attrInternetPushGatewayUrl: ros.IResolvable | string;
    /**
     * Attribute InternetRemoteReadUrl: Internet remote read URL.
     */
    readonly attrInternetRemoteReadUrl: ros.IResolvable | string;
    /**
     * Attribute InternetRemoteWriteUrl: Internet remote write URL.
     */
    readonly attrInternetRemoteWriteUrl: ros.IResolvable | string;
    /**
     * Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
     */
    readonly attrOpenTelemetryUrl: ros.IResolvable | string;
    /**
     * Attribute PushGatewayUrl: Internal push gateway URL.
     */
    readonly attrPushGatewayUrl: ros.IResolvable | string;
    /**
     * Attribute RemoteReadUrl: Internal remote read URL.
     */
    readonly attrRemoteReadUrl: ros.IResolvable | string;
    /**
     * Attribute RemoteWriteUrl: Internal remote write URL.
     */
    readonly attrRemoteWriteUrl: ros.IResolvable | string;
    /**
     * Attribute Token: The token for Grafana read URL.
     */
    readonly attrToken: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::PrometheusUrl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheusUrl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
 */
export declare class PrometheusUrl extends ros.Resource implements IPrometheusUrl {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PrometheusUrlProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable | string;
    /**
     * Attribute ClusterType: Cluster type.
     */
    readonly attrClusterType: ros.IResolvable | string;
    /**
     * Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
     */
    readonly attrGrafanaUrl: ros.IResolvable | string;
    /**
     * Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
     */
    readonly attrInternetGrafanaUrl: ros.IResolvable | string;
    /**
     * Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
     */
    readonly attrInternetOpenTelemetryUrl: ros.IResolvable | string;
    /**
     * Attribute InternetPushGatewayUrl: Internet push gateway URL.
     */
    readonly attrInternetPushGatewayUrl: ros.IResolvable | string;
    /**
     * Attribute InternetRemoteReadUrl: Internet remote read URL.
     */
    readonly attrInternetRemoteReadUrl: ros.IResolvable | string;
    /**
     * Attribute InternetRemoteWriteUrl: Internet remote write URL.
     */
    readonly attrInternetRemoteWriteUrl: ros.IResolvable | string;
    /**
     * Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
     */
    readonly attrOpenTelemetryUrl: ros.IResolvable | string;
    /**
     * Attribute PushGatewayUrl: Internal push gateway URL.
     */
    readonly attrPushGatewayUrl: ros.IResolvable | string;
    /**
     * Attribute RemoteReadUrl: Internal remote read URL.
     */
    readonly attrRemoteReadUrl: ros.IResolvable | string;
    /**
     * Attribute RemoteWriteUrl: Internal remote write URL.
     */
    readonly attrRemoteWriteUrl: ros.IResolvable | string;
    /**
     * Attribute Token: The token for Grafana read URL.
     */
    readonly attrToken: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PrometheusUrlProps, enableResourcePropertyConstraint?: boolean);
}
