// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosPrometheis`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
 */
export interface RosPrometheisProps {

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPrometheisProps`
 *
 * @param properties - the TypeScript properties of a `RosPrometheisProps`
 *
 * @returns the result of the validation.
 */
function RosPrometheisPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    return errors.wrap('supplied properties not correct for "RosPrometheisProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::Prometheis` resource
 *
 * @param properties - the TypeScript properties of a `RosPrometheisProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::Prometheis` resource.
 */
// @ts-ignore TS6133
function rosPrometheisPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrometheisPropsValidator(properties).assertSuccess();
    }
    return {
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::Prometheis`, which is used to query Prometheus instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Prometheis` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
 */
export class RosPrometheis extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::Prometheis";

    /**
     * @Attribute ClusterIds: The list of cluster IDs.
     */
    public readonly attrClusterIds: ros.IResolvable;

    /**
     * @Attribute Prometheis: The list of Prometheis.
     */
    public readonly attrPrometheis: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheisProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrometheis.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterIds = this.getAtt('ClusterIds');
        this.attrPrometheis = this.getAtt('Prometheis');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrometheisPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
}

/**
 * Determine whether the given properties match those of a `RosPrometheusAuthTokenProps`
 *
 * @param properties - the TypeScript properties of a `RosPrometheusAuthTokenProps`
 *
 * @returns the result of the validation.
 */
function RosPrometheusAuthTokenPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    return errors.wrap('supplied properties not correct for "RosPrometheusAuthTokenProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::PrometheusAuthToken` resource
 *
 * @param properties - the TypeScript properties of a `RosPrometheusAuthTokenProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::PrometheusAuthToken` resource.
 */
// @ts-ignore TS6133
function rosPrometheusAuthTokenPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrometheusAuthTokenPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::PrometheusAuthToken`, which is used to query an authentication token for read and write over the Internet.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrometheusAuthToken` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken
 */
export class RosPrometheusAuthToken extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::PrometheusAuthToken";

    /**
     * @Attribute Token: The token for Grafana read URL.
     */
    public readonly attrToken: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: Cluster ID.
     */
    public clusterId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheusAuthTokenProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrometheusAuthToken.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrToken = this.getAtt('Token');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrometheusAuthTokenPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
}

/**
 * Determine whether the given properties match those of a `RosPrometheusUrlProps`
 *
 * @param properties - the TypeScript properties of a `RosPrometheusUrlProps`
 *
 * @returns the result of the validation.
 */
function RosPrometheusUrlPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    return errors.wrap('supplied properties not correct for "RosPrometheusUrlProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::PrometheusUrl` resource
 *
 * @param properties - the TypeScript properties of a `RosPrometheusUrlProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::PrometheusUrl` resource.
 */
// @ts-ignore TS6133
function rosPrometheusUrlPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrometheusUrlPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::PrometheusUrl`, which is used to query all URLs of a cluster, including the URLs for remote read, remote write, Pushgateway, and Grafana.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrometheusUrl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
 */
export class RosPrometheusUrl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::PrometheusUrl";

    /**
     * @Attribute ClusterId: Cluster ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ClusterType: Cluster type.
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
     */
    public readonly attrGrafanaUrl: ros.IResolvable;

    /**
     * @Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
     */
    public readonly attrInternetGrafanaUrl: ros.IResolvable;

    /**
     * @Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
     */
    public readonly attrInternetOpenTelemetryUrl: ros.IResolvable;

    /**
     * @Attribute InternetPushGatewayUrl: Internet push gateway URL.
     */
    public readonly attrInternetPushGatewayUrl: ros.IResolvable;

    /**
     * @Attribute InternetRemoteReadUrl: Internet remote read URL.
     */
    public readonly attrInternetRemoteReadUrl: ros.IResolvable;

    /**
     * @Attribute InternetRemoteWriteUrl: Internet remote write URL.
     */
    public readonly attrInternetRemoteWriteUrl: ros.IResolvable;

    /**
     * @Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
     */
    public readonly attrOpenTelemetryUrl: ros.IResolvable;

    /**
     * @Attribute PushGatewayUrl: Internal push gateway URL.
     */
    public readonly attrPushGatewayUrl: ros.IResolvable;

    /**
     * @Attribute RemoteReadUrl: Internal remote read URL.
     */
    public readonly attrRemoteReadUrl: ros.IResolvable;

    /**
     * @Attribute RemoteWriteUrl: Internal remote write URL.
     */
    public readonly attrRemoteWriteUrl: ros.IResolvable;

    /**
     * @Attribute Token: The token for Grafana read URL.
     */
    public readonly attrToken: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: Cluster ID.
     */
    public clusterId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheusUrlProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrometheusUrl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrGrafanaUrl = this.getAtt('GrafanaUrl');
        this.attrInternetGrafanaUrl = this.getAtt('InternetGrafanaUrl');
        this.attrInternetOpenTelemetryUrl = this.getAtt('InternetOpenTelemetryUrl');
        this.attrInternetPushGatewayUrl = this.getAtt('InternetPushGatewayUrl');
        this.attrInternetRemoteReadUrl = this.getAtt('InternetRemoteReadUrl');
        this.attrInternetRemoteWriteUrl = this.getAtt('InternetRemoteWriteUrl');
        this.attrOpenTelemetryUrl = this.getAtt('OpenTelemetryUrl');
        this.attrPushGatewayUrl = this.getAtt('PushGatewayUrl');
        this.attrRemoteReadUrl = this.getAtt('RemoteReadUrl');
        this.attrRemoteWriteUrl = this.getAtt('RemoteWriteUrl');
        this.attrToken = this.getAtt('Token');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrometheusUrlPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
