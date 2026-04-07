package alicloudroscdkapig


// Properties for defining a `RosSource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-source
type RosSourceProps struct {
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	K8SSourceConfig interface{} `field:"optional" json:"k8SSourceConfig" yaml:"k8SSourceConfig"`
	NacosSourceConfig interface{} `field:"optional" json:"nacosSourceConfig" yaml:"nacosSourceConfig"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

