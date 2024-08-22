package alicloudroscdkdns


// Properties for defining a `RosDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
type RosDomainProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosDomain_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

