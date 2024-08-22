package alicloudroscdkvpc


// Properties for defining a `DhcpOptionsSetAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionssetattachment
type DhcpOptionsSetAttachmentProps struct {
	// Property dhcpOptionsSetId: The ID of the DHCP options set.
	DhcpOptionsSetId interface{} `field:"required" json:"dhcpOptionsSetId" yaml:"dhcpOptionsSetId"`
	// Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
}

