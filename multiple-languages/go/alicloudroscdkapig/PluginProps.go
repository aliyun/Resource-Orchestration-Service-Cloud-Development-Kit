package alicloudroscdkapig


// Properties for defining a `Plugin`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
type PluginProps struct {
	// Property gatewayId: The ID of the Gateway.
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	// Property pluginClassId: The ID of the plugin class.
	PluginClassId interface{} `field:"required" json:"pluginClassId" yaml:"pluginClassId"`
}

