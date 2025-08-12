package datasource


// Properties for defining a `RosPlugins`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugins
type RosPluginsProps struct {
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	PluginClassId interface{} `field:"optional" json:"pluginClassId" yaml:"pluginClassId"`
	PluginClassName interface{} `field:"optional" json:"pluginClassName" yaml:"pluginClassName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

