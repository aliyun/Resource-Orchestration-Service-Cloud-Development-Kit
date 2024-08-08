package datasource


// Properties for defining a `RosDomains`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
type RosDomainsProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

