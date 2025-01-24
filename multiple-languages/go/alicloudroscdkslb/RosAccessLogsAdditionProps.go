package alicloudroscdkslb


// Properties for defining a `RosAccessLogsAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesslogsaddition
type RosAccessLogsAdditionProps struct {
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	LogProject interface{} `field:"required" json:"logProject" yaml:"logProject"`
	LogStore interface{} `field:"required" json:"logStore" yaml:"logStore"`
}

