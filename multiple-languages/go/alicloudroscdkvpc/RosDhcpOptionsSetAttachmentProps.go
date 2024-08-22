package alicloudroscdkvpc


// Properties for defining a `RosDhcpOptionsSetAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionssetattachment
type RosDhcpOptionsSetAttachmentProps struct {
	DhcpOptionsSetId interface{} `field:"required" json:"dhcpOptionsSetId" yaml:"dhcpOptionsSetId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
}

