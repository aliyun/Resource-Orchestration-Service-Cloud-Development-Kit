package datasource


// Properties for defining a `Domain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domain
type DomainProps struct {
	// Property domainName: The accelerated domain name.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

