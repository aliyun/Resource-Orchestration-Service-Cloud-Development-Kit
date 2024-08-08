package alicloudroscdkdcdn


// Properties for defining a `RosDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dcdn-domain
type RosDomainProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	Sources interface{} `field:"required" json:"sources" yaml:"sources"`
	CheckUrl interface{} `field:"optional" json:"checkUrl" yaml:"checkUrl"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Scope interface{} `field:"optional" json:"scope" yaml:"scope"`
	Tags *[]*RosDomain_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TopLevelDomain interface{} `field:"optional" json:"topLevelDomain" yaml:"topLevelDomain"`
}

