package alicloudroscdkvpc


// Properties for defining a `RosVpcIpv6CidrAllocation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcipv6cidrallocation
type RosVpcIpv6CidrAllocationProps struct {
	AddressPoolType interface{} `field:"optional" json:"addressPoolType" yaml:"addressPoolType"`
	Ipv6CidrBlock interface{} `field:"optional" json:"ipv6CidrBlock" yaml:"ipv6CidrBlock"`
	Ipv6Isp interface{} `field:"optional" json:"ipv6Isp" yaml:"ipv6Isp"`
}

