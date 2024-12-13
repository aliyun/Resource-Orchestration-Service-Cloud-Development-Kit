package alicloudroscdkvpc


// Properties for defining a `RosIpam`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipam
type RosIpamProps struct {
	OperatingRegionList interface{} `field:"required" json:"operatingRegionList" yaml:"operatingRegionList"`
	IpamDescription interface{} `field:"optional" json:"ipamDescription" yaml:"ipamDescription"`
	IpamName interface{} `field:"optional" json:"ipamName" yaml:"ipamName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosIpam_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

