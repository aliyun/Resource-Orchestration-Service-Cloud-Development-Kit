package alicloudroscdkmaxcompute


// Properties for defining a `RosRole`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-role
type RosRoleProps struct {
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	RoleName interface{} `field:"required" json:"roleName" yaml:"roleName"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Acl interface{} `field:"optional" json:"acl" yaml:"acl"`
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
}

