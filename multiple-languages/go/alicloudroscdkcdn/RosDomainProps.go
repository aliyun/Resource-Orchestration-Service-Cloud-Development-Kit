package alicloudroscdkcdn


// Properties for defining a `RosDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain
type RosDomainProps struct {
	CdnType interface{} `field:"required" json:"cdnType" yaml:"cdnType"`
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	CheckUrl interface{} `field:"optional" json:"checkUrl" yaml:"checkUrl"`
	OriginServers interface{} `field:"optional" json:"originServers" yaml:"originServers"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Scope interface{} `field:"optional" json:"scope" yaml:"scope"`
	Sources interface{} `field:"optional" json:"sources" yaml:"sources"`
	Tags *[]*RosDomain_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TopLevelDomain interface{} `field:"optional" json:"topLevelDomain" yaml:"topLevelDomain"`
}

