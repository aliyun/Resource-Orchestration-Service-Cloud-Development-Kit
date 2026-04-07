package alicloudroscdkcloudstoragegateway


// Properties for defining a `GatewayLogging`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
type GatewayLoggingProps struct {
	// Property gatewayId: The ID of the gateway.
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	// Property slsLogstore: The name of the SLS log store.
	SlsLogstore interface{} `field:"required" json:"slsLogstore" yaml:"slsLogstore"`
	// Property slsProject: The name of the SLS project.
	SlsProject interface{} `field:"required" json:"slsProject" yaml:"slsProject"`
}

