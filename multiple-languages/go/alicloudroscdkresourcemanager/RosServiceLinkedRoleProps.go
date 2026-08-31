package alicloudroscdkresourcemanager


// Properties for defining a `RosServiceLinkedRole`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-servicelinkedrole
type RosServiceLinkedRoleProps struct {
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	CustomSuffix interface{} `field:"optional" json:"customSuffix" yaml:"customSuffix"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

