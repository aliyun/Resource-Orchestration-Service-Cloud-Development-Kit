package alicloudroscdkapig


// Properties for defining a `RosPlugin`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
type RosPluginProps struct {
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	PluginClassId interface{} `field:"required" json:"pluginClassId" yaml:"pluginClassId"`
}

