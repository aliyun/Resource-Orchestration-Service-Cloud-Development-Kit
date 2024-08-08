package alicloudroscdkvpc


// Properties for defining a `RosBgpNetwork`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpnetwork
type RosBgpNetworkProps struct {
	DstCidrBlock interface{} `field:"required" json:"dstCidrBlock" yaml:"dstCidrBlock"`
	RouterId interface{} `field:"required" json:"routerId" yaml:"routerId"`
}

