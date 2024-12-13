package alicloudroscdkvpc


// Properties for defining a `Ipam`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipam
type IpamProps struct {
	// Property operatingRegionList: List of IPAM effective regions.
	OperatingRegionList interface{} `field:"required" json:"operatingRegionList" yaml:"operatingRegionList"`
	// Property ipamDescription: The description of IPAM.
	//
	// It must be 2 to 256 characters in length and must start with an uppercase letter or a Chinese character, but cannot start with 'http:\/\/ 'or 'https. If the description is not filled in, it is blank. The default value is blank.
	IpamDescription interface{} `field:"optional" json:"ipamDescription" yaml:"ipamDescription"`
	// Property ipamName: The name of the IPAM.
	IpamName interface{} `field:"optional" json:"ipamName" yaml:"ipamName"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of ipam.
	Tags *[]*RosIpam_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

