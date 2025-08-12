package datasource


// Properties for defining a `PluginClasses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclasses
type PluginClassesProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property type: The type of the plugin class.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

