package alicloudroscdkga


// Properties for defining a `RosDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-domain
type RosDomainProps struct {
	AcceleratorIds interface{} `field:"required" json:"acceleratorIds" yaml:"acceleratorIds"`
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
}

