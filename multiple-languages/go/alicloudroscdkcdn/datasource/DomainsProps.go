package datasource


// Properties for defining a `Domains`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
type DomainsProps struct {
	// Property domainName: The accelerated domain name.
	//
	// You can specify only one domain name.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

