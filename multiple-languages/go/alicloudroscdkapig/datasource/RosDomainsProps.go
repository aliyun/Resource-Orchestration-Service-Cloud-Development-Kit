package datasource


// Properties for defining a `RosDomains`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-domains
type RosDomainsProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

