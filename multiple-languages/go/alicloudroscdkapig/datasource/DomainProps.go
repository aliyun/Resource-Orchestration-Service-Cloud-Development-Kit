package datasource


// Properties for defining a `Domain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-domain
type DomainProps struct {
	// Property domainId: The ID of the domain.
	DomainId interface{} `field:"required" json:"domainId" yaml:"domainId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

