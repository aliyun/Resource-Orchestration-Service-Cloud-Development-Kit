package alicloudroscdkga


// Properties for defining a `RosEndpointGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
type RosEndpointGroupProps struct {
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	EndpointConfigurations interface{} `field:"required" json:"endpointConfigurations" yaml:"endpointConfigurations"`
	EndpointGroupRegion interface{} `field:"required" json:"endpointGroupRegion" yaml:"endpointGroupRegion"`
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EndpointGroupType interface{} `field:"optional" json:"endpointGroupType" yaml:"endpointGroupType"`
	EndpointRequestProtocol interface{} `field:"optional" json:"endpointRequestProtocol" yaml:"endpointRequestProtocol"`
	HealthCheckEnabled interface{} `field:"optional" json:"healthCheckEnabled" yaml:"healthCheckEnabled"`
	HealthCheckIntervalSeconds interface{} `field:"optional" json:"healthCheckIntervalSeconds" yaml:"healthCheckIntervalSeconds"`
	HealthCheckPath interface{} `field:"optional" json:"healthCheckPath" yaml:"healthCheckPath"`
	HealthCheckPort interface{} `field:"optional" json:"healthCheckPort" yaml:"healthCheckPort"`
	HealthCheckProtocol interface{} `field:"optional" json:"healthCheckProtocol" yaml:"healthCheckProtocol"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ThresholdCount interface{} `field:"optional" json:"thresholdCount" yaml:"thresholdCount"`
	TrafficPercentage interface{} `field:"optional" json:"trafficPercentage" yaml:"trafficPercentage"`
}

