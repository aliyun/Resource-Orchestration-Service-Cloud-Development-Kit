package datasource


// Properties for defining a `RosCustomDomains`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-customdomains
type RosCustomDomainsProps struct {
	Prefix interface{} `field:"optional" json:"prefix" yaml:"prefix"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

