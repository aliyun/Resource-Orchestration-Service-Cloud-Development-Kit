package alicloudroscdkmse


// Properties for defining a `RosPluginConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
type RosPluginConfigProps struct {
	ConfigLevel interface{} `field:"required" json:"configLevel" yaml:"configLevel"`
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
	GatewayUniqueId interface{} `field:"required" json:"gatewayUniqueId" yaml:"gatewayUniqueId"`
	PluginId interface{} `field:"required" json:"pluginId" yaml:"pluginId"`
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	ResourceIdList interface{} `field:"optional" json:"resourceIdList" yaml:"resourceIdList"`
}

