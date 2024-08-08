package alicloudroscdkimm


// Properties for defining a `Project`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project
type ProjectProps struct {
	// Property project: The name of project.
	Project interface{} `field:"required" json:"project" yaml:"project"`
	// Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS).
	//
	// The default value is AliyunIMMDefaultRole.
	ServiceRole interface{} `field:"optional" json:"serviceRole" yaml:"serviceRole"`
}

