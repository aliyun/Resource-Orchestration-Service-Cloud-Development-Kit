package alicloudroscdkga


// Properties for defining a `RosBasicEndpointGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
type RosBasicEndpointGroupProps struct {
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	EndpointGroupRegion interface{} `field:"required" json:"endpointGroupRegion" yaml:"endpointGroupRegion"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EndpointAddress interface{} `field:"optional" json:"endpointAddress" yaml:"endpointAddress"`
	EndpointSubAddress interface{} `field:"optional" json:"endpointSubAddress" yaml:"endpointSubAddress"`
	EndpointType interface{} `field:"optional" json:"endpointType" yaml:"endpointType"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

