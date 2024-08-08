package alicloudroscdkecs


// Properties for defining a `SecurityGroupIngresses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingresses
type SecurityGroupIngressesProps struct {
	// Property permissions: A list of security group rules.
	//
	// A hundred at most.
	Permissions interface{} `field:"required" json:"permissions" yaml:"permissions"`
	// Property securityGroupId: Id of the security group.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
}

