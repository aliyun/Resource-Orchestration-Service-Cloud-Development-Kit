package alicloudroscdkdirectmail


// Properties for defining a `Ipfilter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-ipfilter
type IpfilterProps struct {
	// Property ipAddress: The whitelist IP address.
	IpAddress interface{} `field:"required" json:"ipAddress" yaml:"ipAddress"`
}

