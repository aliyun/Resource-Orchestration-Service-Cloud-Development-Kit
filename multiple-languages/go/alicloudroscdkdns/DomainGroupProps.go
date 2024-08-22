package alicloudroscdkdns


// Properties for defining a `DomainGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
type DomainGroupProps struct {
	// Property groupName: Domain name group name.
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
}

