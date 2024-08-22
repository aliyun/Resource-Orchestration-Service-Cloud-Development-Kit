package alicloudroscdkecs


// Properties for defining a `RosSecurityGroupIngresses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingresses
type RosSecurityGroupIngressesProps struct {
	Permissions interface{} `field:"required" json:"permissions" yaml:"permissions"`
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
}

