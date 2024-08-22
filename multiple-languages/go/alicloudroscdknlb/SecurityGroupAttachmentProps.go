package alicloudroscdknlb


// Properties for defining a `SecurityGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment
type SecurityGroupAttachmentProps struct {
	// Property loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property securityGroupIds: List of security group id.
	SecurityGroupIds interface{} `field:"required" json:"securityGroupIds" yaml:"securityGroupIds"`
}

