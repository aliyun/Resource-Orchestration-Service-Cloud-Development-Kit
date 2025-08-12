package datasource


// Properties for defining a `Plugin`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugin
type PluginProps struct {
	// Property pluginId: The ID of the plugin.
	PluginId interface{} `field:"required" json:"pluginId" yaml:"pluginId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

