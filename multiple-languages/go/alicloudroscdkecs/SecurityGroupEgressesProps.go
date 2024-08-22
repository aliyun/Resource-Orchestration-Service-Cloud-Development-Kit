package alicloudroscdkecs


// Properties for defining a `SecurityGroupEgresses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegresses
type SecurityGroupEgressesProps struct {
	// Property permissions: A list of security group rules.
	//
	// A hundred at most.
	Permissions interface{} `field:"required" json:"permissions" yaml:"permissions"`
	// Property securityGroupId: Id of the security group.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
}

