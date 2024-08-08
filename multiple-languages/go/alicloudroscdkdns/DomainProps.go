package alicloudroscdkdns


// Properties for defining a `Domain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
type DomainProps struct {
	// Property domainName: Domain name.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property groupId: Domain name grouping, the default is the "default grouping" GroupId.
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosDomain_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

