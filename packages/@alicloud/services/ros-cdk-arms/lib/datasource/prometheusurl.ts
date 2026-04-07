import * as ros from '@alicloud/ros-cdk-core';
import { RosPrometheusUrl } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::PrometheusUrl`, which is used to query all URLs of a cluster, including the URLs for remote read, remote write, Pushgateway, and Grafana.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheusUrl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
 */
export class PrometheusUrl extends ros.Resource implements IPrometheusUrl {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PrometheusUrlProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterId: Cluster ID.
     */
    public readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute ClusterType: Cluster type.
     */
    public readonly attrClusterType: ros.IResolvable | string;

    /**
     * Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
     */
    public readonly attrGrafanaUrl: ros.IResolvable | string;

    /**
     * Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
     */
    public readonly attrInternetGrafanaUrl: ros.IResolvable | string;

    /**
     * Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
     */
    public readonly attrInternetOpenTelemetryUrl: ros.IResolvable | string;

    /**
     * Attribute InternetPushGatewayUrl: Internet push gateway URL.
     */
    public readonly attrInternetPushGatewayUrl: ros.IResolvable | string;

    /**
     * Attribute InternetRemoteReadUrl: Internet remote read URL.
     */
    public readonly attrInternetRemoteReadUrl: ros.IResolvable | string;

    /**
     * Attribute InternetRemoteWriteUrl: Internet remote write URL.
     */
    public readonly attrInternetRemoteWriteUrl: ros.IResolvable | string;

    /**
     * Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
     */
    public readonly attrOpenTelemetryUrl: ros.IResolvable | string;

    /**
     * Attribute PushGatewayUrl: Internal push gateway URL.
     */
    public readonly attrPushGatewayUrl: ros.IResolvable | string;

    /**
     * Attribute RemoteReadUrl: Internal remote read URL.
     */
    public readonly attrRemoteReadUrl: ros.IResolvable | string;

    /**
     * Attribute RemoteWriteUrl: Internal remote write URL.
     */
    public readonly attrRemoteWriteUrl: ros.IResolvable | string;

    /**
     * Attribute Token: The token for Grafana read URL.
     */
    public readonly attrToken: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrometheusUrlProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPrometheusUrl = new RosPrometheusUrl(this, id,  {
            clusterId: props.clusterId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrometheusUrl;
        this.attrClusterId = rosPrometheusUrl.attrClusterId;
        this.attrClusterType = rosPrometheusUrl.attrClusterType;
        this.attrGrafanaUrl = rosPrometheusUrl.attrGrafanaUrl;
        this.attrInternetGrafanaUrl = rosPrometheusUrl.attrInternetGrafanaUrl;
        this.attrInternetOpenTelemetryUrl = rosPrometheusUrl.attrInternetOpenTelemetryUrl;
        this.attrInternetPushGatewayUrl = rosPrometheusUrl.attrInternetPushGatewayUrl;
        this.attrInternetRemoteReadUrl = rosPrometheusUrl.attrInternetRemoteReadUrl;
        this.attrInternetRemoteWriteUrl = rosPrometheusUrl.attrInternetRemoteWriteUrl;
        this.attrOpenTelemetryUrl = rosPrometheusUrl.attrOpenTelemetryUrl;
        this.attrPushGatewayUrl = rosPrometheusUrl.attrPushGatewayUrl;
        this.attrRemoteReadUrl = rosPrometheusUrl.attrRemoteReadUrl;
        this.attrRemoteWriteUrl = rosPrometheusUrl.attrRemoteWriteUrl;
        this.attrToken = rosPrometheusUrl.attrToken;
    }
}
