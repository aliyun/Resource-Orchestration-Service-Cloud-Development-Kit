package alicloudroscdkalb


// Properties for defining a `HealthCheckTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-healthchecktemplate
type HealthCheckTemplateProps struct {
	// Property healthCheckTemplateName: The name of the health check template.
	//
	// The name must be 2 to 128 characters in length, must start with a letter, a
	// digit, or a Chinese character, and can contain digits, periods (.), underscores
	// (_), hyphens (-), and spaces.
	HealthCheckTemplateName interface{} `field:"required" json:"healthCheckTemplateName" yaml:"healthCheckTemplateName"`
	// Property healthCheckCodes: The HTTP status codes that indicate a successful health check.
	HealthCheckCodes interface{} `field:"optional" json:"healthCheckCodes" yaml:"healthCheckCodes"`
	// Property healthCheckConnectPort: The port that is used for health checks.
	//
	// Valid values: 0 to 65535.
	// Default value: 0. This value indicates that the port on a backend server is used for health checks.
	HealthCheckConnectPort interface{} `field:"optional" json:"healthCheckConnectPort" yaml:"healthCheckConnectPort"`
	// Property healthCheckHost: The domain name used for the health check.
	//
	// Valid values:
	// - $SERVER_IP: The private IP address of a backend server. If you set this
	// parameter to `$SERVER_IP` or leave it empty, the load balancer uses the private
	// IP address of the backend server as the domain name for the health check.
	// - domain: The domain name must be 1 to 80 characters in length and can contain
	// letters, digits, periods (.), and hyphens (-).
	// > This parameter takes effect only when the `HealthCheckProtocol` parameter is
	// set to HTTP or HTTPS.
	HealthCheckHost interface{} `field:"optional" json:"healthCheckHost" yaml:"healthCheckHost"`
	// Property healthCheckHttpVersion: The HTTP version for health check protocol.
	//
	// Valid values: HTTP1.0 or HTTP1.1.
	// Default value: HTTP 1.1.
	// This parameter is available only when HealthCheckProtocol is set to HTTP or HTTPS.
	HealthCheckHttpVersion interface{} `field:"optional" json:"healthCheckHttpVersion" yaml:"healthCheckHttpVersion"`
	// Property healthCheckInterval: The interval between two consecutive health checks.
	//
	// Unit: seconds.
	// Valid values: 1 to 50.
	// Default value: 2.
	HealthCheckInterval interface{} `field:"optional" json:"healthCheckInterval" yaml:"healthCheckInterval"`
	// Property healthCheckMethod: The method used for the health check.
	//
	// Valid values:
	// - HEAD (default): For HTTP and HTTPS listeners, the default health check method
	// is HEAD.
	// - POST: For gRPC listeners, the default health check method is POST.
	// - GET: If the response body exceeds 8 KB, it is truncated. This does not affect
	// the health check result.
	// > This parameter takes effect only when the `HealthCheckProtocol` parameter is
	// set to HTTP, HTTPS, or gRPC.
	HealthCheckMethod interface{} `field:"optional" json:"healthCheckMethod" yaml:"healthCheckMethod"`
	// Property healthCheckPath: The URL that is used for health checks.
	//
	// The URL must be 1 to 80 characters in length. It must start with a forward slash
	// (\/) and can contain letters, digits, and the following special characters: `- \/ .
	// % ? # & _;~!()*[]@$^:',+`.
	// > This parameter takes effect only when the `HealthCheckProtocol` parameter is
	// set to HTTP or HTTPS.
	HealthCheckPath interface{} `field:"optional" json:"healthCheckPath" yaml:"healthCheckPath"`
	// Property healthCheckProtocol: The protocol used for the health check.
	//
	// Valid values:
	// - HTTP (default): simulates browser access by sending HEAD or GET requests to
	// check whether the server application is healthy.
	// - HTTPS: simulates browser access by sending HEAD or GET requests to check
	// whether the server application is healthy. HTTPS provides encrypted data
	// transmission and is more secure than HTTP.
	// - TCP: checks whether the server port is responsive by sending SYN packets.
	// - gRPC: checks whether the server application is healthy by sending POST or GET
	// requests.
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
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.
	//
	// In this case, the health status is changed from success to fail.
	// Valid values: 2 to 10.
	// Default value: 3.
	UnhealthyThreshold interface{} `field:"optional" json:"unhealthyThreshold" yaml:"unhealthyThreshold"`
}

