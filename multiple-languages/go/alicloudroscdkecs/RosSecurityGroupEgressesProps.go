package alicloudroscdkecs


// Properties for defining a `RosSecurityGroupEgresses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegresses
type RosSecurityGroupEgressesProps struct {
	Permissions interface{} `field:"required" json:"permissions" yaml:"permissions"`
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
}

