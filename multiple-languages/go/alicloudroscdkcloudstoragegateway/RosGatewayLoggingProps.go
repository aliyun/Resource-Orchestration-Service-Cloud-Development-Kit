package alicloudroscdkcloudstoragegateway


// Properties for defining a `RosGatewayLogging`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
type RosGatewayLoggingProps struct {
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	SlsLogstore interface{} `field:"required" json:"slsLogstore" yaml:"slsLogstore"`
	SlsProject interface{} `field:"required" json:"slsProject" yaml:"slsProject"`
}

