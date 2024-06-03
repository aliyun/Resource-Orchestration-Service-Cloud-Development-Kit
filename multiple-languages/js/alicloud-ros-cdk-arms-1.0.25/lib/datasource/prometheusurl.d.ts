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
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::PrometheusUrl`, which is used to query all URLs of a cluster, including the URLs for remote read, remote write, Pushgateway, and Grafana.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheusUrl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
 */
export declare class PrometheusUrl extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PrometheusUrlProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute ClusterType: Cluster type.
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
     */
    readonly attrGrafanaUrl: ros.IResolvable;
    /**
     * Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
     */
    readonly attrInternetGrafanaUrl: ros.IResolvable;
    /**
     * Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
     */
    readonly attrInternetOpenTelemetryUrl: ros.IResolvable;
    /**
     * Attribute InternetPushGatewayUrl: Internet push gateway URL.
     */
    readonly attrInternetPushGatewayUrl: ros.IResolvable;
    /**
     * Attribute InternetRemoteReadUrl: Internet remote read URL.
     */
    readonly attrInternetRemoteReadUrl: ros.IResolvable;
    /**
     * Attribute InternetRemoteWriteUrl: Internet remote write URL.
     */
    readonly attrInternetRemoteWriteUrl: ros.IResolvable;
    /**
     * Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
     */
    readonly attrOpenTelemetryUrl: ros.IResolvable;
    /**
     * Attribute PushGatewayUrl: Internal push gateway URL.
     */
    readonly attrPushGatewayUrl: ros.IResolvable;
    /**
     * Attribute RemoteReadUrl: Internal remote read URL.
     */
    readonly attrRemoteReadUrl: ros.IResolvable;
    /**
     * Attribute RemoteWriteUrl: Internal remote write URL.
     */
    readonly attrRemoteWriteUrl: ros.IResolvable;
    /**
     * Attribute Token: The token for Grafana read URL.
     */
    readonly attrToken: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PrometheusUrlProps, enableResourcePropertyConstraint?: boolean);
}
