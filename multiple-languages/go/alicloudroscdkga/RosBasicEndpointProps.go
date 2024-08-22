package alicloudroscdkga


// Properties for defining a `RosBasicEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
type RosBasicEndpointProps struct {
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	EndpointAddress interface{} `field:"required" json:"endpointAddress" yaml:"endpointAddress"`
	EndpointGroupId interface{} `field:"required" json:"endpointGroupId" yaml:"endpointGroupId"`
	EndpointSubAddress interface{} `field:"optional" json:"endpointSubAddress" yaml:"endpointSubAddress"`
	EndpointSubAddressType interface{} `field:"optional" json:"endpointSubAddressType" yaml:"endpointSubAddressType"`
	EndpointType interface{} `field:"optional" json:"endpointType" yaml:"endpointType"`
	EndpointZoneId interface{} `field:"optional" json:"endpointZoneId" yaml:"endpointZoneId"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

