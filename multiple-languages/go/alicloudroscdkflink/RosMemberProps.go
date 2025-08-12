package alicloudroscdkflink


// Properties for defining a `RosMember`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
type RosMemberProps struct {
	Member interface{} `field:"required" json:"member" yaml:"member"`
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	Role interface{} `field:"required" json:"role" yaml:"role"`
	Workspace interface{} `field:"required" json:"workspace" yaml:"workspace"`
}

