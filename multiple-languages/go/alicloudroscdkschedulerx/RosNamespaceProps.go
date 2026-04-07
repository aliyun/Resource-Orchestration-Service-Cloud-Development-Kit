package alicloudroscdkschedulerx


// Properties for defining a `RosNamespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace
type RosNamespaceProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Uid interface{} `field:"optional" json:"uid" yaml:"uid"`
}

