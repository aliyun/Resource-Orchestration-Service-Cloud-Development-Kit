package datasource


// Properties for defining a `RosConfigurations`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-configurations
type RosConfigurationsProps struct {
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	AppName interface{} `field:"optional" json:"appName" yaml:"appName"`
	DataId interface{} `field:"optional" json:"dataId" yaml:"dataId"`
	Group interface{} `field:"optional" json:"group" yaml:"group"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

