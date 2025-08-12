package alicloudroscdkesa


// Properties for defining a `EdgeContainerApp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
type EdgeContainerAppProps struct {
	// Property edgeContainerAppName: The name of the application.
	//
	// The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
	EdgeContainerAppName interface{} `field:"required" json:"edgeContainerAppName" yaml:"edgeContainerAppName"`
	// Property servicePort: The server port.
	//
	// Valid values: 1 to 65535.
	ServicePort interface{} `field:"required" json:"servicePort" yaml:"servicePort"`
	// Property targetPort: The backend port, which is also the service port of the application.
	//
	// Valid values: 1 to 65535.
	TargetPort interface{} `field:"required" json:"targetPort" yaml:"targetPort"`
	// Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy.
	//
	// Valid values: 1 to 10. Default value: 5.
	HealthCheckFailTimes interface{} `field:"optional" json:"healthCheckFailTimes" yaml:"healthCheckFailTimes"`
	// Property healthCheckHost: The domain name that is used for health checks.
	//
	// This parameter is empty by default.
	HealthCheckHost interface{} `field:"optional" json:"healthCheckHost" yaml:"healthCheckHost"`
	// Property healthCheckHttpCode: The HTTP status code returned for a successful health check.
	//
	// Valid values:
	// http_2xx (default)http_3xx.
	HealthCheckHttpCode interface{} `field:"optional" json:"healthCheckHttpCode" yaml:"healthCheckHttpCode"`
	// Property healthCheckInterval: The interval between two consecutive health checks.
	//
	// Unit: seconds. Valid values: 1 to 50. Default value: 5.
	HealthCheckInterval interface{} `field:"optional" json:"healthCheckInterval" yaml:"healthCheckInterval"`
	// Property healthCheckMethod: The HTTP request method for health checks.
	//
	// Valid values:
	// HEAD (default): requests the headers of the resource.
	// GET: requests the specified resource and returns both the headers and entity body.
	HealthCheckMethod interface{} `field:"optional" json:"healthCheckMethod" yaml:"healthCheckMethod"`
	// Property healthCheckPort: The port used for health checks.
	//
	// Valid values: 1 to 65535. Default value: 80.
	HealthCheckPort interface{} `field:"optional" json:"healthCheckPort" yaml:"healthCheckPort"`
	// Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
	//
	// Valid values: 1 to 10. Default value: 2.
	HealthCheckSuccTimes interface{} `field:"optional" json:"healthCheckSuccTimes" yaml:"healthCheckSuccTimes"`
	// Property healthCheckTimeout: The timeout period of a health check response.
	//
	// If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
	HealthCheckTimeout interface{} `field:"optional" json:"healthCheckTimeout" yaml:"healthCheckTimeout"`
	// Property healthCheckType: The health check type.
	//
	// By default, this parameter is left empty. Valid values:
	// l4: Layer 4 health check.
	// l7: Layer 7 health check.
	HealthCheckType interface{} `field:"optional" json:"healthCheckType" yaml:"healthCheckType"`
	// Property healthCheckUri: The URI used for health checks.
	//
	// The URI must be 1 to 80 characters in length. Default value: "\/".
	HealthCheckUri interface{} `field:"optional" json:"healthCheckUri" yaml:"healthCheckUri"`
	// Property remarks: The remarks.
	//
	// This parameter is empty by default.
	Remarks interface{} `field:"optional" json:"remarks" yaml:"remarks"`
}

