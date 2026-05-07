package alicloudroscdkvpc


// Properties for defining a `RosIpamPoolAllocation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampoolallocation
type RosIpamPoolAllocationProps struct {
	IpamPoolId interface{} `field:"required" json:"ipamPoolId" yaml:"ipamPoolId"`
	Cidr interface{} `field:"optional" json:"cidr" yaml:"cidr"`
	CidrMask interface{} `field:"optional" json:"cidrMask" yaml:"cidrMask"`
	IpamPoolAllocationDescription interface{} `field:"optional" json:"ipamPoolAllocationDescription" yaml:"ipamPoolAllocationDescription"`
	IpamPoolAllocationName interface{} `field:"optional" json:"ipamPoolAllocationName" yaml:"ipamPoolAllocationName"`
}

