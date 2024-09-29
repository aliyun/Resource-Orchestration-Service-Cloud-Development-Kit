package alicloudroscdkdrds


// Properties for defining a `RosAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-account
type RosAccountProps struct {
	DbPrivileges interface{} `field:"required" json:"dbPrivileges" yaml:"dbPrivileges"`
	DrdsAccountName interface{} `field:"required" json:"drdsAccountName" yaml:"drdsAccountName"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Password interface{} `field:"required" json:"password" yaml:"password"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

