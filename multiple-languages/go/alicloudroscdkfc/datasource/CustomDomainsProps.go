package datasource


// Properties for defining a `CustomDomains`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-customdomains
type CustomDomainsProps struct {
	// Property prefix: Qualified returned custom domain names must be prefixed with Prefix.
	//
	// For example, if the Prefix is "a", the returned custom domain names should be started with "a".
	Prefix interface{} `field:"optional" json:"prefix" yaml:"prefix"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

