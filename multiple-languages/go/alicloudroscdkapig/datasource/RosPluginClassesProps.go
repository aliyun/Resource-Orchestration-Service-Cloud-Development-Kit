package datasource


// Properties for defining a `RosPluginClasses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclasses
type RosPluginClassesProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

