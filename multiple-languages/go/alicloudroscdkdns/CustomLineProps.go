package alicloudroscdkdns


// Properties for defining a `CustomLine`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
type CustomLineProps struct {
	// Property domainName: The domain name associated with the custom line.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property ipSegment: The list of IP segments for the custom line.
	IpSegment interface{} `field:"required" json:"ipSegment" yaml:"ipSegment"`
	// Property lineName: The name of the custom line.
	LineName interface{} `field:"required" json:"lineName" yaml:"lineName"`
}

