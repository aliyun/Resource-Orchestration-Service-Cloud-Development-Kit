package datasource


// Properties for defining a `RosPluginClass`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclass
type RosPluginClassProps struct {
	PluginClassId interface{} `field:"required" json:"pluginClassId" yaml:"pluginClassId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

