package datasource


// Properties for defining a `DomainExtension`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension
type DomainExtensionProps struct {
	// Property domainExtensionId: The ID of the additional certificate.
	DomainExtensionId interface{} `field:"required" json:"domainExtensionId" yaml:"domainExtensionId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

