package alicloudroscdkdcdn


// Properties for defining a `Domain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dcdn-domain
type DomainProps struct {
	// Property domainName: The DCDN domain name.
	//
	// Wildcard domain names that start with periods (.) are supported. For example, .a.com.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property sources: The list of origin URLs.
	Sources interface{} `field:"required" json:"sources" yaml:"sources"`
	// Property checkUrl: The validation of the origin.
	CheckUrl interface{} `field:"optional" json:"checkUrl" yaml:"checkUrl"`
	// Property resourceGroupId: The ID of the resource group.
	//
	// If this is left blank, the system automatically fills in the ID of the default resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property scope: Valid values: domestic, overseas, and global.
	//
	// Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
	Scope interface{} `field:"optional" json:"scope" yaml:"scope"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosDomain_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
	TopLevelDomain interface{} `field:"optional" json:"topLevelDomain" yaml:"topLevelDomain"`
}

