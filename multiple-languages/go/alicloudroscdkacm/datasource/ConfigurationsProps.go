package datasource


// Properties for defining a `Configurations`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-configurations
type ConfigurationsProps struct {
	// Property namespaceId: The namespace ID of configuration.
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	// Property appName: The app name of configuration.
	AppName interface{} `field:"optional" json:"appName" yaml:"appName"`
	// Property dataId: The data ID of configuration.
	DataId interface{} `field:"optional" json:"dataId" yaml:"dataId"`
	// Property group: The group of configuration.
	Group interface{} `field:"optional" json:"group" yaml:"group"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

