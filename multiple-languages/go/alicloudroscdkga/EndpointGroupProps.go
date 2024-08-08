package alicloudroscdkga


// Properties for defining a `EndpointGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
type EndpointGroupProps struct {
	// Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property endpointConfigurations:.
	EndpointConfigurations interface{} `field:"required" json:"endpointConfigurations" yaml:"endpointConfigurations"`
	// Property endpointGroupRegion: The region ID of the endpoint group.
	EndpointGroupRegion interface{} `field:"required" json:"endpointGroupRegion" yaml:"endpointGroupRegion"`
	// Property listenerId: The ID of the listener to be associated with the endpoint group.
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
	// Property description: The description of the endpoint group.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property endpointGroupType: The type of the endpoint group.
	//
	// Valid values:
	// default: The endpoint group is a default endpoint group. This is the default value.
	// virtual: The endpoint group is a virtual endpoint group.
	// Note Only HTTP and HTTPS listeners support virtual endpoint groups.
	EndpointGroupType interface{} `field:"optional" json:"endpointGroupType" yaml:"endpointGroupType"`
	// Property endpointRequestProtocol: The protocol used by the backend service.
	//
	// Valid values:
	// http: This is the default value.
	// https
	// Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
	// For an HTTP listener, the backend service protocol must be HTTP.
	EndpointRequestProtocol interface{} `field:"optional" json:"endpointRequestProtocol" yaml:"endpointRequestProtocol"`
	// Property healthCheckEnabled: Specifies whether to enable the health check feature.
	HealthCheckEnabled interface{} `field:"optional" json:"healthCheckEnabled" yaml:"healthCheckEnabled"`
	// Property healthCheckIntervalSeconds: The interval between two consecutive health checks.
	//
	// Unit: seconds.
	HealthCheckIntervalSeconds interface{} `field:"optional" json:"healthCheckIntervalSeconds" yaml:"healthCheckIntervalSeconds"`
	// Property healthCheckPath: The path set as the destination on the targets for health checks.
	HealthCheckPath interface{} `field:"optional" json:"healthCheckPath" yaml:"healthCheckPath"`
	// Property healthCheckPort: The port that is used to connect with the targets for health checks.
	HealthCheckPort interface{} `field:"optional" json:"healthCheckPort" yaml:"healthCheckPort"`
	// Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
	//
	// tcp: TCP protocol
	// http: HTTP protocol
	// https: HTTPS protocol.
	HealthCheckProtocol interface{} `field:"optional" json:"healthCheckProtocol" yaml:"healthCheckProtocol"`
	// Property name: The name of the endpoint group.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.
	//
	// Valid values: 2 to 10. Default value: 3.
	ThresholdCount interface{} `field:"optional" json:"thresholdCount" yaml:"thresholdCount"`
	// Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.
	TrafficPercentage interface{} `field:"optional" json:"trafficPercentage" yaml:"trafficPercentage"`
}

