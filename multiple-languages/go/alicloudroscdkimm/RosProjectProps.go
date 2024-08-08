package alicloudroscdkimm


// Properties for defining a `RosProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project
type RosProjectProps struct {
	Project interface{} `field:"required" json:"project" yaml:"project"`
	ServiceRole interface{} `field:"optional" json:"serviceRole" yaml:"serviceRole"`
}

