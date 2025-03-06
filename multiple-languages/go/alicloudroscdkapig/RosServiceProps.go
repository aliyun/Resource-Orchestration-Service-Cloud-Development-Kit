package alicloudroscdkapig


// Properties for defining a `RosService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
type RosServiceProps struct {
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	Addresses interface{} `field:"optional" json:"addresses" yaml:"addresses"`
	AiServiceConfig interface{} `field:"optional" json:"aiServiceConfig" yaml:"aiServiceConfig"`
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
	Qualifier interface{} `field:"optional" json:"qualifier" yaml:"qualifier"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ServiceName interface{} `field:"optional" json:"serviceName" yaml:"serviceName"`
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
}

