package alicloudroscdkalb


// Properties for defining a `HealthCheckTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-healthchecktemplate
type HealthCheckTemplateProps struct {
	// Property healthCheckTemplateName: The name of the health check template.
	//
	// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
	// (.), underscores (_), and hyphens (-). The name must start with a letter.
	HealthCheckTemplateName interface{} `field:"required" json:"healthCheckTemplateName" yaml:"healthCheckTemplateName"`
	// Property healthCheckCodes: The HTTP status code for a successful health check.
	//
	// If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
	// If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
	// them with commas (,).
	// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
	HealthCheckCodes interface{} `field:"optional" json:"healthCheckCodes" yaml:"healthCheckCodes"`
	// Property healthCheckConnectPort: The port that is used for health checks.
	//
	// Valid values: 0 to 65535.
	// Default value: 0. This value indicates that the port on a backend server is used for health checks.
	HealthCheckConnectPort interface{} `field:"optional" json:"healthCheckConnectPort" yaml:"healthCheckConnectPort"`
	// Property healthCheckHost: The domain name that is used for health checks.
	//
	// Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
	// CIDR block meets the following requirements:
	// The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
	// The domain name contains at least one period (.) but does not start or end with a
	// period (.).
	// The rightmost domain label can contain only letters, and cannot contain digits or
	// hyphens (-).
	// Other domain labels cannot start or end with a hyphen (-).
	// This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
	HealthCheckHost interface{} `field:"optional" json:"healthCheckHost" yaml:"healthCheckHost"`
	// Property healthCheckInterval: The interval between two consecutive health checks.
	//
	// Unit: seconds.
	// Valid values: 1 to 50.
	// Default value: 2.
	HealthCheckInterval interface{} `field:"optional" json:"healthCheckInterval" yaml:"healthCheckInterval"`
	// Property healthCheckMethod: The HTTP method that is used for health checks.
	//
	// Valid values:
	// HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
	// HTTP health checks.
	// POST: By default, gRPC health checks use the POST method.
	// GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
	// health check result is not affected.
	// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
	HealthCheckMethod interface{} `field:"optional" json:"healthCheckMethod" yaml:"healthCheckMethod"`
	// Property healthCheckPath: The URL path that is used for health checks.
	//
	// It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
	// (-), forward slashes (\/), periods (.), percent signs (%), question marks (?), number
	// signs (#), and ampersands (&). It can also contain the following extended characters:
	// _ ; ~ ! ( ) * [ ] @ $ ^ : ' , +. The URL path must start with a forward slash (\/).
	// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
	HealthCheckPath interface{} `field:"optional" json:"healthCheckPath" yaml:"healthCheckPath"`
	// Property healthCheckProtocol: The protocol that is used for health checks.
	//
	// Valid values:
	// HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
	// from a browser and check whether the backend server is healthy. This is the default
	// protocol.
	// TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
	// whether the port of the backend server is available to receive requests.
	// GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
	// to check whether the backend server is healthy.
	HealthCheckProtocol interface{} `field:"optional" json:"healthCheckProtocol" yaml:"healthCheckProtocol"`
	// Property healthCheckTimeout: The timeout period of a health check.
	//
	// Unit: seconds. If a backend server does not
	// respond within the specified timeout period, the backend server fails the health check.
	// Valid values: 1 to 300.
	// Default value: 5.
	// Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
	HealthCheckTimeout interface{} `field:"optional" json:"healthCheckTimeout" yaml:"healthCheckTimeout"`
	// Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.
	//
	// In this case, the health status is changed from
	// fail to success.
	// Valid values: 2 to 10.
	// Default value: 3.
	HealthyThreshold interface{} `field:"optional" json:"healthyThreshold" yaml:"healthyThreshold"`
	// Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.
	//
	// In this case, the health status is changed from success to fail.
	// Valid values: 2 to 10.
	// Default value: 3.
	UnhealthyThreshold interface{} `field:"optional" json:"unhealthyThreshold" yaml:"unhealthyThreshold"`
}

