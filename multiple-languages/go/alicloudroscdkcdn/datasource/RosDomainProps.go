package datasource


// Properties for defining a `RosDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domain
type RosDomainProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

