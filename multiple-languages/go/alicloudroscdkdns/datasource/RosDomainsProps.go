package datasource


// Properties for defining a `RosDomains`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domains
type RosDomainsProps struct {
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	KeyWord interface{} `field:"optional" json:"keyWord" yaml:"keyWord"`
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SearchMode interface{} `field:"optional" json:"searchMode" yaml:"searchMode"`
	Starmark interface{} `field:"optional" json:"starmark" yaml:"starmark"`
}

