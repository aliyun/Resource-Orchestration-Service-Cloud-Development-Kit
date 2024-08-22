package alicloudroscdkga


// Properties for defining a `RosEndpointGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
type RosEndpointGroupsProps struct {
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	EndpointGroupConfigurations interface{} `field:"required" json:"endpointGroupConfigurations" yaml:"endpointGroupConfigurations"`
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
}

