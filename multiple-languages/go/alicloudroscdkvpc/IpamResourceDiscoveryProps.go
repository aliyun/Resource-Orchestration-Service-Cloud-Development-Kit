package alicloudroscdkvpc


// Properties for defining a `IpamResourceDiscovery`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamresourcediscovery
type IpamResourceDiscoveryProps struct {
	// Property operatingRegionList: The list of regions where the resource discovery is effective.
	OperatingRegionList interface{} `field:"required" json:"operatingRegionList" yaml:"operatingRegionList"`
	// Property ipamResourceDiscoveryDescription: The description of the resource discovery.
	IpamResourceDiscoveryDescription interface{} `field:"optional" json:"ipamResourceDiscoveryDescription" yaml:"ipamResourceDiscoveryDescription"`
	// Property ipamResourceDiscoveryName: The name of the resource discovery.
	IpamResourceDiscoveryName interface{} `field:"optional" json:"ipamResourceDiscoveryName" yaml:"ipamResourceDiscoveryName"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of ipam resource discovery.
	Tags *[]*RosIpamResourceDiscovery_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

