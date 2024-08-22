package alicloudroscdkvpc


// Properties for defining a `BgpNetwork`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpnetwork
type BgpNetworkProps struct {
	// Property dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect to a data center.
	DstCidrBlock interface{} `field:"required" json:"dstCidrBlock" yaml:"dstCidrBlock"`
	// Property routerId: The ID of the vRouter associated with the router interface.
	RouterId interface{} `field:"required" json:"routerId" yaml:"routerId"`
}

