package alicloudroscdkga


// Properties for defining a `EndpointGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
type EndpointGroupsProps struct {
	// Property acceleratorId: The ID of the basic GA instance.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property endpointGroupConfigurations: The configurations of the endpoint groups.
	EndpointGroupConfigurations interface{} `field:"required" json:"endpointGroupConfigurations" yaml:"endpointGroupConfigurations"`
	// Property listenerId: The ID of the region to which the endpoint group belongs.
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
}

