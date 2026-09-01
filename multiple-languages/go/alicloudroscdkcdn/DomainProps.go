package alicloudroscdkcdn


// Properties for defining a `Domain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain
type DomainProps struct {
	// Property cdnType: The business type of the domain name.
	//
	// Valid values:
	// - web: images and small files.
	// - download: large files.
	// - video: on-demand video and audio streaming.
	CdnType interface{} `field:"required" json:"cdnType" yaml:"cdnType"`
	// Property domainName: The CDN domain name.
	//
	// Wildcard domain names that start with periods (.) are supported. For example, .a.com.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property checkUrl: The health check URL.
	CheckUrl interface{} `field:"optional" json:"checkUrl" yaml:"checkUrl"`
	// Property originServers: The list of origin URLs.
	//
	// It has the same function as Sources, but has a higher priority than it.
	OriginServers interface{} `field:"optional" json:"originServers" yaml:"originServers"`
	// Property resourceGroupId: The ID of the resource group.
	//
	// If this is left blank, the system automatically fills in the ID of the default resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property scope: The acceleration region.
	//
	// Valid values:
	// - domestic (default): Chinese mainland only.
	// - overseas: global (excluding the Chinese mainland).
	// - global: global.
	Scope interface{} `field:"optional" json:"scope" yaml:"scope"`
	// Property sources: The list of origin URLs.
	Sources interface{} `field:"optional" json:"sources" yaml:"sources"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosDomain_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
	TopLevelDomain interface{} `field:"optional" json:"topLevelDomain" yaml:"topLevelDomain"`
}

