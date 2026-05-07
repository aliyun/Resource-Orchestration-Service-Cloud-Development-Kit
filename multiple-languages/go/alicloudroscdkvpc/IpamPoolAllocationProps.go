package alicloudroscdkvpc


// Properties for defining a `IpamPoolAllocation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampoolallocation
type IpamPoolAllocationProps struct {
	// Property ipamPoolId: The ID of the IPAM Pool.
	IpamPoolId interface{} `field:"required" json:"ipamPoolId" yaml:"ipamPoolId"`
	// Property cidr: The allocated address segment.
	Cidr interface{} `field:"optional" json:"cidr" yaml:"cidr"`
	// Property cidrMask: Create a custom reserved network segment from The IPAM address pool by entering a mask.
	//
	// > Enter at least one of **Cidr** or **CidrMask.
	CidrMask interface{} `field:"optional" json:"cidrMask" yaml:"cidrMask"`
	// Property ipamPoolAllocationDescription: The description of the ipam pool alloctaion.
	//
	// It must be 1 to 256 characters in length and must start with an English letter or Chinese character, but cannot start with 'http:\/\/ 'or 'https. If it is not filled in, it is empty. The default value is empty.
	IpamPoolAllocationDescription interface{} `field:"optional" json:"ipamPoolAllocationDescription" yaml:"ipamPoolAllocationDescription"`
	// Property ipamPoolAllocationName: The name of the ipam pool allocation.
	//
	// It must be 1 to 128 characters in length and cannot start with 'http:\/\/ 'or 'https.
	IpamPoolAllocationName interface{} `field:"optional" json:"ipamPoolAllocationName" yaml:"ipamPoolAllocationName"`
}

