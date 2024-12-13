package alicloudroscdkapig


// Properties for defining a `RosDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
type RosDomainProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
}

