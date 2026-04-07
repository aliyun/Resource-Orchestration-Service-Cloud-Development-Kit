package alicloudroscdkapig


// Properties for defining a `Source`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-source
type SourceProps struct {
	// Property gatewayId: The gateway ID.
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	// Property k8SSourceConfig: The K8s source configuration.
	K8SSourceConfig interface{} `field:"optional" json:"k8SSourceConfig" yaml:"k8SSourceConfig"`
	// Property nacosSourceConfig: The Nacos source configuration.
	NacosSourceConfig interface{} `field:"optional" json:"nacosSourceConfig" yaml:"nacosSourceConfig"`
	// Property resourceGroupId: The resource group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property type: The source type: - MSE_NACOS: MSE Nacos.
	//
	// - K8S: Container service.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

