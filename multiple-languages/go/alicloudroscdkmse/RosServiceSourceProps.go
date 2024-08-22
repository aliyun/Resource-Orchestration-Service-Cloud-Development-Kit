package alicloudroscdkmse


// Properties for defining a `RosServiceSource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
type RosServiceSourceProps struct {
	GatewayUniqueId interface{} `field:"required" json:"gatewayUniqueId" yaml:"gatewayUniqueId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Source interface{} `field:"required" json:"source" yaml:"source"`
	Address interface{} `field:"optional" json:"address" yaml:"address"`
	GroupList interface{} `field:"optional" json:"groupList" yaml:"groupList"`
	IngressOptions interface{} `field:"optional" json:"ingressOptions" yaml:"ingressOptions"`
	PathList interface{} `field:"optional" json:"pathList" yaml:"pathList"`
}

