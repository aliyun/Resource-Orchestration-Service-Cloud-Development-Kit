package alicloudroscdkcdn


// Properties for defining a `RosDeliverTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-delivertask
type RosDeliverTaskProps struct {
	Deliver interface{} `field:"required" json:"deliver" yaml:"deliver"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Reports interface{} `field:"required" json:"reports" yaml:"reports"`
	Schedule interface{} `field:"required" json:"schedule" yaml:"schedule"`
	DomainNames interface{} `field:"optional" json:"domainNames" yaml:"domainNames"`
}

