package alicloudroscdkpolardb


// Properties for defining a `RosApplicationEndpointAddress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-applicationendpointaddress
type RosApplicationEndpointAddressProps struct {
	ApplicationId interface{} `field:"required" json:"applicationId" yaml:"applicationId"`
	EndpointId interface{} `field:"required" json:"endpointId" yaml:"endpointId"`
	NetType interface{} `field:"required" json:"netType" yaml:"netType"`
}

