package alicloudroscdkapig


// Properties for defining a `Service`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
type ServiceProps struct {
	// Property gatewayId: The ID of the Cloud Native API Gateway.
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	// Property addresses: Service Address List.
	Addresses interface{} `field:"optional" json:"addresses" yaml:"addresses"`
	// Property aiServiceConfig: AI service configuration when SourceType equals AI.
	AiServiceConfig interface{} `field:"optional" json:"aiServiceConfig" yaml:"aiServiceConfig"`
	// Property groupName: The service group name.
	//
	// Required when SourceType is MSE_NACOS.
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	// Property namespace: The namespace of the service: - SourceType is K8S, indicating the namespace of the K8S service.
	//
	// When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
	// When the SourceType is K8S and MSE_NACOS, it needs to be specified.
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
	// Property qualifier: The function version or alias.
	Qualifier interface{} `field:"optional" json:"qualifier" yaml:"qualifier"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property serviceName: The name of the service, need to fill in manually when SourceType is VIP\/DNS\/AI.
	ServiceName interface{} `field:"optional" json:"serviceName" yaml:"serviceName"`
	// Property sourceType: The type of the service source, optional value is K8S\/MSE_NACOS\/FC3\/SAE_K8S_SERVICE\/VIP\/DNS\/AI.
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
}

