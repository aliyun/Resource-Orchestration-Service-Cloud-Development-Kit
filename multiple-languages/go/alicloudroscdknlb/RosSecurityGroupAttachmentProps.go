package alicloudroscdknlb


// Properties for defining a `RosSecurityGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment
type RosSecurityGroupAttachmentProps struct {
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	SecurityGroupIds interface{} `field:"required" json:"securityGroupIds" yaml:"securityGroupIds"`
}

