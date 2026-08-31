import * as ros from '@alicloud/ros-cdk-core';
import { RosHealthCheckTemplate } from './alb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHealthCheckTemplate as HealthCheckTemplateProperty };

/**
 * Properties for defining a `HealthCheckTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-healthchecktemplate
 */
export interface HealthCheckTemplateProps {

    /**
     * Property healthCheckTemplateName: The name of the health check template.
     * The name must be 2 to 128 characters in length, must start with a letter, a
     * digit, or a Chinese character, and can contain digits, periods (.), underscores
     * (_), hyphens (-), and spaces.
     */
    readonly healthCheckTemplateName: string | ros.IResolvable;

    /**
     * Property healthCheckCodes: The HTTP status codes that indicate a successful health check.
     */
    readonly healthCheckCodes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property healthCheckConnectPort: The port that is used for health checks.
     * Valid values: 0 to 65535.
     * Default value: 0. This value indicates that the port on a backend server is used for health checks.
     */
    readonly healthCheckConnectPort?: number | ros.IResolvable;

    /**
     * Property healthCheckHost: The domain name used for the health check. Valid values:
     * - $SERVER_IP: The private IP address of a backend server. If you set this
     * parameter to `$SERVER_IP` or leave it empty, the load balancer uses the private
     * IP address of the backend server as the domain name for the health check.
     * - domain: The domain name must be 1 to 80 characters in length and can contain
     * letters, digits, periods (.), and hyphens (-).
     * > This parameter takes effect only when the `HealthCheckProtocol` parameter is
     * set to HTTP or HTTPS.
     */
    readonly healthCheckHost?: string | ros.IResolvable;

    /**
     * Property healthCheckHttpVersion: The HTTP version for health check protocol.
     * Valid values: HTTP1.0 or HTTP1.1.
     * Default value: HTTP 1.1.
     * This parameter is available only when HealthCheckProtocol is set to HTTP or HTTPS.
     */
    readonly healthCheckHttpVersion?: string | ros.IResolvable;

    /**
     * Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
     * Valid values: 1 to 50.
     * Default value: 2.
     */
    readonly healthCheckInterval?: number | ros.IResolvable;

    /**
     * Property healthCheckMethod: The method used for the health check. Valid values:
     * - HEAD (default): For HTTP and HTTPS listeners, the default health check method
     * is HEAD.
     * - POST: For gRPC listeners, the default health check method is POST.
     * - GET: If the response body exceeds 8 KB, it is truncated. This does not affect
     * the health check result.
     * > This parameter takes effect only when the `HealthCheckProtocol` parameter is
     * set to HTTP, HTTPS, or gRPC.
     */
    readonly healthCheckMethod?: string | ros.IResolvable;

    /**
     * Property healthCheckPath: The URL that is used for health checks.
     * The URL must be 1 to 80 characters in length. It must start with a forward slash
     * (\/) and can contain letters, digits, and the following special characters: `- \/ .
     * % ? # & _;~!()*[]@$^:',+`.
     * > This parameter takes effect only when the `HealthCheckProtocol` parameter is
     * set to HTTP or HTTPS.
     */
    readonly healthCheckPath?: string | ros.IResolvable;

    /**
     * Property healthCheckProtocol: The protocol used for the health check. Valid values:
     * - HTTP (default): simulates browser access by sending HEAD or GET requests to
     * check whether the server application is healthy.
     * - HTTPS: simulates browser access by sending HEAD or GET requests to check
     * whether the server application is healthy. HTTPS provides encrypted data
     * transmission and is more secure than HTTP.
     * - TCP: checks whether the server port is responsive by sending SYN packets.
     * - gRPC: checks whether the server application is healthy by sending POST or GET
     * requests.
     */
    readonly healthCheckProtocol?: string | ros.IResolvable;

    /**
     * Property healthCheckTimeout: The timeout period of a health check. Unit: seconds. If a backend server does not
     * respond within the specified timeout period, the backend server fails the health check.
     * Valid values: 1 to 300.
     * Default value: 5.
     * Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
     */
    readonly healthCheckTimeout?: number | ros.IResolvable;

    /**
     * Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health
     * checks before it is declared healthy. In this case, the health status is changed from
     * fail to success.
     * Valid values: 2 to 10.
     * Default value: 3.
     */
    readonly healthyThreshold?: number | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks
     * before it is declared unhealthy. In this case, the health status is changed from success to fail.
     * Valid values: 2 to 10.
     * Default value: 3.
     */
    readonly unhealthyThreshold?: number | ros.IResolvable;
}

/**
 * Represents a `HealthCheckTemplate`.
 */
export interface IHealthCheckTemplate extends ros.IResource {
    readonly props: HealthCheckTemplateProps;

    /**
     * Attribute HealthCheckTemplateId: The ID of the health check template.
     */
    readonly attrHealthCheckTemplateId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::HealthCheckTemplate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHealthCheckTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-healthchecktemplate
 */
export class HealthCheckTemplate extends ros.Resource implements IHealthCheckTemplate {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: HealthCheckTemplateProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute HealthCheckTemplateId: The ID of the health check template.
     */
    public readonly attrHealthCheckTemplateId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HealthCheckTemplateProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosHealthCheckTemplate = new RosHealthCheckTemplate(this, id,  {
            healthCheckInterval: props.healthCheckInterval,
            resourceGroupId: props.resourceGroupId,
            unhealthyThreshold: props.unhealthyThreshold,
            healthCheckTemplateName: props.healthCheckTemplateName,
            healthCheckHost: props.healthCheckHost,
            healthCheckPath: props.healthCheckPath,
            healthCheckHttpVersion: props.healthCheckHttpVersion,
            healthCheckTimeout: props.healthCheckTimeout,
            healthCheckConnectPort: props.healthCheckConnectPort,
            healthCheckCodes: props.healthCheckCodes,
            healthCheckMethod: props.healthCheckMethod,
            healthyThreshold: props.healthyThreshold,
            healthCheckProtocol: props.healthCheckProtocol,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHealthCheckTemplate;
        this.attrHealthCheckTemplateId = rosHealthCheckTemplate.attrHealthCheckTemplateId;
    }
}
