package alicloudroscdkga


// Properties for defining a `RosBasicAcceleratorIpEndpointRelation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
type RosBasicAcceleratorIpEndpointRelationProps struct {
	AccelerateIpId interface{} `field:"required" json:"accelerateIpId" yaml:"accelerateIpId"`
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	EndpointId interface{} `field:"required" json:"endpointId" yaml:"endpointId"`
}

