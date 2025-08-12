package datasource


// Properties for defining a `PluginClass`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclass
type PluginClassProps struct {
	// Property pluginClassId: The ID of the plugin class.
	PluginClassId interface{} `field:"required" json:"pluginClassId" yaml:"pluginClassId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

