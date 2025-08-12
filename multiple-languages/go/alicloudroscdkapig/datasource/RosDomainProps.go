package datasource


// Properties for defining a `RosDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-domain
type RosDomainProps struct {
	DomainId interface{} `field:"required" json:"domainId" yaml:"domainId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

