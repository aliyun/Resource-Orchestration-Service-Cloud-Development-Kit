package datasource


// Properties for defining a `RosDomainExtension`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension
type RosDomainExtensionProps struct {
	DomainExtensionId interface{} `field:"required" json:"domainExtensionId" yaml:"domainExtensionId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

