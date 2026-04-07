package alicloudroscdkvpc


// Properties for defining a `RosIpamResourceDiscovery`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamresourcediscovery
type RosIpamResourceDiscoveryProps struct {
	OperatingRegionList interface{} `field:"required" json:"operatingRegionList" yaml:"operatingRegionList"`
	IpamResourceDiscoveryDescription interface{} `field:"optional" json:"ipamResourceDiscoveryDescription" yaml:"ipamResourceDiscoveryDescription"`
	IpamResourceDiscoveryName interface{} `field:"optional" json:"ipamResourceDiscoveryName" yaml:"ipamResourceDiscoveryName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosIpamResourceDiscovery_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

