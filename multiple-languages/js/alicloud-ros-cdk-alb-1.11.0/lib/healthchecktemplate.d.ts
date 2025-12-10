import * as ros from '@alicloud/ros-cdk-core';
import { RosHealthCheckTemplate } from './alb.generated';
export { RosHealthCheckTemplate as HealthCheckTemplateProperty };
/**
 * Properties for defining a `HealthCheckTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-healthchecktemplate
 */
export interface HealthCheckTemplateProps {
    /**
     * Property healthCheckTemplateName: The name of the health check template.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly healthCheckTemplateName: string | ros.IResolvable;
    /**
     * Property healthCheckCodes: The HTTP status code for a successful health check.
     * If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
     * If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
     * them with commas (,).
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    readonly healthCheckCodes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property healthCheckConnectPort: The port that is used for health checks.
     * Valid values: 0 to 65535.
     * Default value: 0. This value indicates that the port on a backend server is used for health checks.
     */
    readonly healthCheckConnectPort?: number | ros.IResolvable;
    /**
     * Property healthCheckHost: The domain name that is used for health checks.
     * Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
     * CIDR block meets the following requirements:
     * The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
     * The domain name contains at least one period (.) but does not start or end with a
     * period (.).
     * The rightmost domain label can contain only letters, and cannot contain digits or
     * hyphens (-).
     * Other domain labels cannot start or end with a hyphen (-).
     * This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    readonly healthCheckHost?: string | ros.IResolvable;
    /**
     * Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
     * Valid values: 1 to 50.
     * Default value: 2.
     */
    readonly healthCheckInterval?: number | ros.IResolvable;
    /**
     * Property healthCheckMethod: The HTTP method that is used for health checks. Valid values:
     * HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
     * HTTP health checks.
     * POST: By default, gRPC health checks use the POST method.
     * GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
     * health check result is not affected.
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    readonly healthCheckMethod?: string | ros.IResolvable;
    /**
     * Property healthCheckPath: The URL path that is used for health checks.
     * It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
     * (-), forward slashes (\/), periods (.), percent signs (%), question marks (?), number
     * signs (#), and ampersands (&). It can also contain the following extended characters:
     * _ ; ~ ! ( ) * [ ] @ $ ^ : ' , +. The URL path must start with a forward slash (\/).
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    readonly healthCheckPath?: string | ros.IResolvable;
    /**
     * Property healthCheckProtocol: The protocol that is used for health checks. Valid values:
     * HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
     * from a browser and check whether the backend server is healthy. This is the default
     * protocol.
     * TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
     * whether the port of the backend server is available to receive requests.
     * GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
     * to check whether the backend server is healthy.
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
export declare class HealthCheckTemplate extends ros.Resource implements IHealthCheckTemplate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HealthCheckTemplateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HealthCheckTemplateId: The ID of the health check template.
     */
    readonly attrHealthCheckTemplateId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HealthCheckTemplateProps, enableResourcePropertyConstraint?: boolean);
}
