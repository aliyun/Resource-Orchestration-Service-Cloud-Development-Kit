package alicloudroscdkga


// Properties for defining a `BasicAcceleratorIpEndpointRelation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
type BasicAcceleratorIpEndpointRelationProps struct {
	// Property accelerateIpId: The ID of the accelerated IP address.
	AccelerateIpId interface{} `field:"required" json:"accelerateIpId" yaml:"accelerateIpId"`
	// Property acceleratorId: The ID of the basic GA instance.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property endpointId: The ID of the endpoint.
	EndpointId interface{} `field:"required" json:"endpointId" yaml:"endpointId"`
}

