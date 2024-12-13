package alicloudroscdkapig


// Properties for defining a `Service`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
type ServiceProps struct {
	// Property addresses: Service Address List.
	Addresses interface{} `field:"required" json:"addresses" yaml:"addresses"`
	// Property gatewayId: The ID of the Cloud Native API Gateway.
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	// Property serviceName: The name of the service.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property sourceType: The type of the service source.
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
}

