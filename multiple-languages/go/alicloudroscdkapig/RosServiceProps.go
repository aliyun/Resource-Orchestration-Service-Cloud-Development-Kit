package alicloudroscdkapig


// Properties for defining a `RosService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
type RosServiceProps struct {
	Addresses interface{} `field:"required" json:"addresses" yaml:"addresses"`
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
}

