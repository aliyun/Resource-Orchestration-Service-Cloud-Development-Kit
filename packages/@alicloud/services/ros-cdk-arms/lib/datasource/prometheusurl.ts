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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::PrometheusUrl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheusUrl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
 */
export class PrometheusUrl extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PrometheusUrlProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterId: Cluster ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute ClusterType: Cluster type.
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
     */
    public readonly attrGrafanaUrl: ros.IResolvable;

    /**
     * Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
     */
    public readonly attrInternetGrafanaUrl: ros.IResolvable;

    /**
     * Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
     */
    public readonly attrInternetOpenTelemetryUrl: ros.IResolvable;

    /**
     * Attribute InternetPushGatewayUrl: Internet push gateway URL.
     */
    public readonly attrInternetPushGatewayUrl: ros.IResolvable;

    /**
     * Attribute InternetRemoteReadUrl: Internet remote read URL.
     */
    public readonly attrInternetRemoteReadUrl: ros.IResolvable;

    /**
     * Attribute InternetRemoteWriteUrl: Internet remote write URL.
     */
    public readonly attrInternetRemoteWriteUrl: ros.IResolvable;

    /**
     * Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
     */
    public readonly attrOpenTelemetryUrl: ros.IResolvable;

    /**
     * Attribute PushGatewayUrl: Internal push gateway URL.
     */
    public readonly attrPushGatewayUrl: ros.IResolvable;

    /**
     * Attribute RemoteReadUrl: Internal remote read URL.
     */
    public readonly attrRemoteReadUrl: ros.IResolvable;

    /**
     * Attribute RemoteWriteUrl: Internal remote write URL.
     */
    public readonly attrRemoteWriteUrl: ros.IResolvable;

    /**
     * Attribute Token: The token for Grafana read URL.
     */
    public readonly attrToken: ros.IResolvable;

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
