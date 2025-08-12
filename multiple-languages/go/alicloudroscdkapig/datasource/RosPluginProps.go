package datasource


// Properties for defining a `RosPlugin`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugin
type RosPluginProps struct {
	PluginId interface{} `field:"required" json:"pluginId" yaml:"pluginId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

