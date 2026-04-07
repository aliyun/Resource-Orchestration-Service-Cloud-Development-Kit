package alicloudroscdkvpc


// Properties for defining a `RosIpamPool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampool
type RosIpamPoolProps struct {
	IpamScopeId interface{} `field:"required" json:"ipamScopeId" yaml:"ipamScopeId"`
	AllocationDefaultCidrMask interface{} `field:"optional" json:"allocationDefaultCidrMask" yaml:"allocationDefaultCidrMask"`
	AllocationMaxCidrMask interface{} `field:"optional" json:"allocationMaxCidrMask" yaml:"allocationMaxCidrMask"`
	AllocationMinCidrMask interface{} `field:"optional" json:"allocationMinCidrMask" yaml:"allocationMinCidrMask"`
	AutoImport interface{} `field:"optional" json:"autoImport" yaml:"autoImport"`
	IpamPoolDescription interface{} `field:"optional" json:"ipamPoolDescription" yaml:"ipamPoolDescription"`
	IpamPoolName interface{} `field:"optional" json:"ipamPoolName" yaml:"ipamPoolName"`
	Ipv6Isp interface{} `field:"optional" json:"ipv6Isp" yaml:"ipv6Isp"`
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	PoolRegionId interface{} `field:"optional" json:"poolRegionId" yaml:"poolRegionId"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SourceIpamPoolId interface{} `field:"optional" json:"sourceIpamPoolId" yaml:"sourceIpamPoolId"`
	Tags *[]*RosIpamPool_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

