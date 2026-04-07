package alicloudroscdkdns


// Properties for defining a `RosCustomLine`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
type RosCustomLineProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	IpSegment interface{} `field:"required" json:"ipSegment" yaml:"ipSegment"`
	LineName interface{} `field:"required" json:"lineName" yaml:"lineName"`
}

