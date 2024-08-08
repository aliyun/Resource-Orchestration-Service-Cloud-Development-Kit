package alicloudroscdkens


// Properties for defining a `RosNetwork`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-network
type RosNetworkProps struct {
	CidrBlock interface{} `field:"required" json:"cidrBlock" yaml:"cidrBlock"`
	EnsRegionId interface{} `field:"required" json:"ensRegionId" yaml:"ensRegionId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	NetworkName interface{} `field:"optional" json:"networkName" yaml:"networkName"`
}

