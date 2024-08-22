package alicloudroscdkalb


// Properties for defining a `SecurityGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-securitygroupattachment
type SecurityGroupAttachmentProps struct {
	// Property loadBalancerId: The ID of ALB instance.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property securityGroupIds: The IDs of the security group to which the ALB instance join.
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
}

