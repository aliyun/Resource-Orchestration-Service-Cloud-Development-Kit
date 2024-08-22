package datasource


// Properties for defining a `RosDomainGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domaingroups
type RosDomainGroupsProps struct {
	KeyWord interface{} `field:"optional" json:"keyWord" yaml:"keyWord"`
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

