import * as ros from '@alicloud/ros-cdk-core';
import { RosEdgeContainerApp } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEdgeContainerApp as EdgeContainerAppProperty };

/**
 * Properties for defining a `EdgeContainerApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
 */
export interface EdgeContainerAppProps {

    /**
     * Property edgeContainerAppName: The name of the application. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
     */
    readonly edgeContainerAppName: string | ros.IResolvable;

    /**
     * Property servicePort: The server port. Valid values: 1 to 65535.
     */
    readonly servicePort: number | ros.IResolvable;

    /**
     * Property targetPort: The backend port, which is also the service port of the application. Valid values: 1 to 65535.
     */
    readonly targetPort: number | ros.IResolvable;

    /**
     * Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy. Valid values: 1 to 10. Default value: 5.
     */
    readonly healthCheckFailTimes?: number | ros.IResolvable;

    /**
     * Property healthCheckHost: The domain name that is used for health checks. This parameter is empty by default.
     */
    readonly healthCheckHost?: string | ros.IResolvable;

    /**
     * Property healthCheckHttpCode: The HTTP status code returned for a successful health check. Valid values:
     * http_2xx (default)http_3xx
     */
    readonly healthCheckHttpCode?: string | ros.IResolvable;

    /**
     * Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50. Default value: 5.
     */
    readonly healthCheckInterval?: number | ros.IResolvable;

    /**
     * Property healthCheckMethod: The HTTP request method for health checks. Valid values:
     * HEAD (default): requests the headers of the resource.
     * GET: requests the specified resource and returns both the headers and entity body.
     */
    readonly healthCheckMethod?: string | ros.IResolvable;

    /**
     * Property healthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
     */
    readonly healthCheckPort?: number | ros.IResolvable;

    /**
     * Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy. Valid values: 1 to 10. Default value: 2.
     */
    readonly healthCheckSuccTimes?: number | ros.IResolvable;

    /**
     * Property healthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
     */
    readonly healthCheckTimeout?: number | ros.IResolvable;

    /**
     * Property healthCheckType: The health check type. By default, this parameter is left empty. Valid values:
     * l4: Layer 4 health check.
     * l7: Layer 7 health check.
     *
     */
    readonly healthCheckType?: string | ros.IResolvable;

    /**
     * Property healthCheckUri: The URI used for health checks. The URI must be 1 to 80 characters in length. Default value: "\/".
     */
    readonly healthCheckUri?: string | ros.IResolvable;

    /**
     * Property remarks: The remarks. This parameter is empty by default.
     */
    readonly remarks?: string | ros.IResolvable;
}

/**
 * Represents a `EdgeContainerApp`.
 */
export interface IEdgeContainerApp extends ros.IResource {
    readonly props: EdgeContainerAppProps;

    /**
     * Attribute AppStatus: The status of the application.
     */
    readonly attrAppStatus: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the application was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DomainName: The domain name that is associated with the application. If no domain name is associated with the application, the value is an empty string.
     */
    readonly attrDomainName: ros.IResolvable | string;

    /**
     * Attribute EdgeContainerAppName: The name of the application.
     */
    readonly attrEdgeContainerAppName: ros.IResolvable | string;

    /**
     * Attribute GatewayType: The type of the gateway.
     */
    readonly attrGatewayType: ros.IResolvable | string;

    /**
     * Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.
     */
    readonly attrHealthCheckFailTimes: ros.IResolvable | string;

    /**
     * Attribute HealthCheckHost: The domain name that is used for health checks.
     */
    readonly attrHealthCheckHost: ros.IResolvable | string;

    /**
     * Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.
     */
    readonly attrHealthCheckHttpCode: ros.IResolvable | string;

    /**
     * Attribute HealthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
     */
    readonly attrHealthCheckInterval: ros.IResolvable | string;

    /**
     * Attribute HealthCheckMethod: The HTTP request method for health checks.
     */
    readonly attrHealthCheckMethod: ros.IResolvable | string;

    /**
     * Attribute HealthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
     */
    readonly attrHealthCheckPort: ros.IResolvable | string;

    /**
     * Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
     */
    readonly attrHealthCheckSuccTimes: ros.IResolvable | string;

    /**
     * Attribute HealthCheckTimeout: The timeout period of a health check response.
     */
    readonly attrHealthCheckTimeout: ros.IResolvable | string;

    /**
     * Attribute HealthCheckType: The health check type.
     */
    readonly attrHealthCheckType: ros.IResolvable | string;

    /**
     * Attribute HealthCheckUri: The URI used for health checks.
     */
    readonly attrHealthCheckUri: ros.IResolvable | string;

    /**
     * Attribute QuicCid: Indicates whether QUIC is enabled.
     */
    readonly attrQuicCid: ros.IResolvable | string;

    /**
     * Attribute Remarks: The remarks. This parameter is empty by default.
     */
    readonly attrRemarks: ros.IResolvable | string;

    /**
     * Attribute ServicePort: The server port.
     */
    readonly attrServicePort: ros.IResolvable | string;

    /**
     * Attribute TargetPort: The backend port, which is also the service port of the application.
     */
    readonly attrTargetPort: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the application was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute VersionCount: The number of versions of the application.
     */
    readonly attrVersionCount: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::EdgeContainerApp`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEdgeContainerApp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
 */
export class EdgeContainerApp extends ros.Resource implements IEdgeContainerApp {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EdgeContainerAppProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppStatus: The status of the application.
     */
    public readonly attrAppStatus: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the application was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DomainName: The domain name that is associated with the application. If no domain name is associated with the application, the value is an empty string.
     */
    public readonly attrDomainName: ros.IResolvable | string;

    /**
     * Attribute EdgeContainerAppName: The name of the application.
     */
    public readonly attrEdgeContainerAppName: ros.IResolvable | string;

    /**
     * Attribute GatewayType: The type of the gateway.
     */
    public readonly attrGatewayType: ros.IResolvable | string;

    /**
     * Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.
     */
    public readonly attrHealthCheckFailTimes: ros.IResolvable | string;

    /**
     * Attribute HealthCheckHost: The domain name that is used for health checks.
     */
    public readonly attrHealthCheckHost: ros.IResolvable | string;

    /**
     * Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.
     */
    public readonly attrHealthCheckHttpCode: ros.IResolvable | string;

    /**
     * Attribute HealthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
     */
    public readonly attrHealthCheckInterval: ros.IResolvable | string;

    /**
     * Attribute HealthCheckMethod: The HTTP request method for health checks.
     */
    public readonly attrHealthCheckMethod: ros.IResolvable | string;

    /**
     * Attribute HealthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
     */
    public readonly attrHealthCheckPort: ros.IResolvable | string;

    /**
     * Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
     */
    public readonly attrHealthCheckSuccTimes: ros.IResolvable | string;

    /**
     * Attribute HealthCheckTimeout: The timeout period of a health check response.
     */
    public readonly attrHealthCheckTimeout: ros.IResolvable | string;

    /**
     * Attribute HealthCheckType: The health check type.
     */
    public readonly attrHealthCheckType: ros.IResolvable | string;

    /**
     * Attribute HealthCheckUri: The URI used for health checks.
     */
    public readonly attrHealthCheckUri: ros.IResolvable | string;

    /**
     * Attribute QuicCid: Indicates whether QUIC is enabled.
     */
    public readonly attrQuicCid: ros.IResolvable | string;

    /**
     * Attribute Remarks: The remarks. This parameter is empty by default.
     */
    public readonly attrRemarks: ros.IResolvable | string;

    /**
     * Attribute ServicePort: The server port.
     */
    public readonly attrServicePort: ros.IResolvable | string;

    /**
     * Attribute TargetPort: The backend port, which is also the service port of the application.
     */
    public readonly attrTargetPort: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the application was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute VersionCount: The number of versions of the application.
     */
    public readonly attrVersionCount: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EdgeContainerAppProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEdgeContainerApp = new RosEdgeContainerApp(this, id,  {
            healthCheckFailTimes: props.healthCheckFailTimes === undefined || props.healthCheckFailTimes === null ? 5 : props.healthCheckFailTimes,
            servicePort: props.servicePort,
            healthCheckInterval: props.healthCheckInterval === undefined || props.healthCheckInterval === null ? 5 : props.healthCheckInterval,
            targetPort: props.targetPort,
            healthCheckUri: props.healthCheckUri,
            healthCheckHost: props.healthCheckHost,
            healthCheckTimeout: props.healthCheckTimeout === undefined || props.healthCheckTimeout === null ? 3 : props.healthCheckTimeout,
            healthCheckSuccTimes: props.healthCheckSuccTimes === undefined || props.healthCheckSuccTimes === null ? 2 : props.healthCheckSuccTimes,
            remarks: props.remarks,
            healthCheckMethod: props.healthCheckMethod,
            healthCheckPort: props.healthCheckPort === undefined || props.healthCheckPort === null ? 80 : props.healthCheckPort,
            edgeContainerAppName: props.edgeContainerAppName,
            healthCheckHttpCode: props.healthCheckHttpCode,
            healthCheckType: props.healthCheckType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEdgeContainerApp;
        this.attrAppStatus = rosEdgeContainerApp.attrAppStatus;
        this.attrCreateTime = rosEdgeContainerApp.attrCreateTime;
        this.attrDomainName = rosEdgeContainerApp.attrDomainName;
        this.attrEdgeContainerAppName = rosEdgeContainerApp.attrEdgeContainerAppName;
        this.attrGatewayType = rosEdgeContainerApp.attrGatewayType;
        this.attrHealthCheckFailTimes = rosEdgeContainerApp.attrHealthCheckFailTimes;
        this.attrHealthCheckHost = rosEdgeContainerApp.attrHealthCheckHost;
        this.attrHealthCheckHttpCode = rosEdgeContainerApp.attrHealthCheckHttpCode;
        this.attrHealthCheckInterval = rosEdgeContainerApp.attrHealthCheckInterval;
        this.attrHealthCheckMethod = rosEdgeContainerApp.attrHealthCheckMethod;
        this.attrHealthCheckPort = rosEdgeContainerApp.attrHealthCheckPort;
        this.attrHealthCheckSuccTimes = rosEdgeContainerApp.attrHealthCheckSuccTimes;
        this.attrHealthCheckTimeout = rosEdgeContainerApp.attrHealthCheckTimeout;
        this.attrHealthCheckType = rosEdgeContainerApp.attrHealthCheckType;
        this.attrHealthCheckUri = rosEdgeContainerApp.attrHealthCheckUri;
        this.attrQuicCid = rosEdgeContainerApp.attrQuicCid;
        this.attrRemarks = rosEdgeContainerApp.attrRemarks;
        this.attrServicePort = rosEdgeContainerApp.attrServicePort;
        this.attrTargetPort = rosEdgeContainerApp.attrTargetPort;
        this.attrUpdateTime = rosEdgeContainerApp.attrUpdateTime;
        this.attrVersionCount = rosEdgeContainerApp.attrVersionCount;
    }
}
