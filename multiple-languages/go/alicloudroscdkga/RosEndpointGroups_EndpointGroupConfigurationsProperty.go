package alicloudroscdkga


type RosEndpointGroups_EndpointGroupConfigurationsProperty struct {
	EndpointGroupRegion interface{} `field:"required" json:"endpointGroupRegion" yaml:"endpointGroupRegion"`
	EnableClientIpPreservationProxyProtocol interface{} `field:"optional" json:"enableClientIpPreservationProxyProtocol" yaml:"enableClientIpPreservationProxyProtocol"`
	EnableClientIpPreservationToa interface{} `field:"optional" json:"enableClientIpPreservationToa" yaml:"enableClientIpPreservationToa"`
	EndpointConfigurations interface{} `field:"optional" json:"endpointConfigurations" yaml:"endpointConfigurations"`
	EndpointGroupDescription interface{} `field:"optional" json:"endpointGroupDescription" yaml:"endpointGroupDescription"`
	EndpointGroupName interface{} `field:"optional" json:"endpointGroupName" yaml:"endpointGroupName"`
	EndpointGroupType interface{} `field:"optional" json:"endpointGroupType" yaml:"endpointGroupType"`
	EndpointRequestProtocol interface{} `field:"optional" json:"endpointRequestProtocol" yaml:"endpointRequestProtocol"`
	HealthCheckEnabled interface{} `field:"optional" json:"healthCheckEnabled" yaml:"healthCheckEnabled"`
	HealthCheckIntervalSeconds interface{} `field:"optional" json:"healthCheckIntervalSeconds" yaml:"healthCheckIntervalSeconds"`
	HealthCheckPath interface{} `field:"optional" json:"healthCheckPath" yaml:"healthCheckPath"`
	HealthCheckPort interface{} `field:"optional" json:"healthCheckPort" yaml:"healthCheckPort"`
	HealthCheckProtocol interface{} `field:"optional" json:"healthCheckProtocol" yaml:"healthCheckProtocol"`
	PortOverrides interface{} `field:"optional" json:"portOverrides" yaml:"portOverrides"`
	Tags *[]*RosEndpointGroups_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ThresholdCount interface{} `field:"optional" json:"thresholdCount" yaml:"thresholdCount"`
	TrafficPercentage interface{} `field:"optional" json:"trafficPercentage" yaml:"trafficPercentage"`
}

