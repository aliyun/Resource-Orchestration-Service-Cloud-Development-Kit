package alicloudroscdkflink


// Properties for defining a `Member`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
type MemberProps struct {
	// Property member: The user ID of the member.
	Member interface{} `field:"required" json:"member" yaml:"member"`
	// Property namespace: The project space name.
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	// Property role: The role of the member.
	Role interface{} `field:"required" json:"role" yaml:"role"`
	// Property workspace: The work space ID.
	Workspace interface{} `field:"required" json:"workspace" yaml:"workspace"`
}

