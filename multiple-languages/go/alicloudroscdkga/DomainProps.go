package alicloudroscdkga


// Properties for defining a `Domain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-domain
type DomainProps struct {
	// Property acceleratorIds: The IDs of the GA instance to be disassociated.
	//
	// You can specify up to 50 IDs.
	AcceleratorIds interface{} `field:"required" json:"acceleratorIds" yaml:"acceleratorIds"`
	// Property domain: The accelerated domain name to be disassociated.
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
}

