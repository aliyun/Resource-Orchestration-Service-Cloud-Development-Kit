package alicloudroscdkvpc


// Properties for defining a `IpamPool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampool
type IpamPoolProps struct {
	// Property ipamScopeId: The ID of the IPAM scope.
	//
	// This parameter is required.
	IpamScopeId interface{} `field:"required" json:"ipamScopeId" yaml:"ipamScopeId"`
	// Property allocationDefaultCidrMask: The default CIDR mask for allocation.
	AllocationDefaultCidrMask interface{} `field:"optional" json:"allocationDefaultCidrMask" yaml:"allocationDefaultCidrMask"`
	// Property allocationMaxCidrMask: The maximum CIDR mask for allocation.
	AllocationMaxCidrMask interface{} `field:"optional" json:"allocationMaxCidrMask" yaml:"allocationMaxCidrMask"`
	// Property allocationMinCidrMask: The minimum CIDR mask for allocation.
	AllocationMinCidrMask interface{} `field:"optional" json:"allocationMinCidrMask" yaml:"allocationMinCidrMask"`
	// Property autoImport: Whether to automatically import the IPAM pool.
	AutoImport interface{} `field:"optional" json:"autoImport" yaml:"autoImport"`
	// Property ipamPoolDescription: The description of the IPAM pool.
	IpamPoolDescription interface{} `field:"optional" json:"ipamPoolDescription" yaml:"ipamPoolDescription"`
	// Property ipamPoolName: The name of the IPAM pool.
	IpamPoolName interface{} `field:"optional" json:"ipamPoolName" yaml:"ipamPoolName"`
	// Property ipv6Isp: The IPv6 ISP for the IPAM pool.
	Ipv6Isp interface{} `field:"optional" json:"ipv6Isp" yaml:"ipv6Isp"`
	// Property ipVersion: The IP version of the IPAM pool.
	//
	// Valid values: IPv4, IPv6.
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	// Property poolRegionId: The ID of the region where the IPAM pool is located.
	PoolRegionId interface{} `field:"optional" json:"poolRegionId" yaml:"poolRegionId"`
	// Property resourceGroupId: The ID of the resource group to which the IPAM pool belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property sourceIpamPoolId: The ID of the source IPAM pool.
	SourceIpamPoolId interface{} `field:"optional" json:"sourceIpamPoolId" yaml:"sourceIpamPoolId"`
	// Property tags: The tags of the IPAM pool.
	//
	// The maximum length is 21.
	Tags *[]*RosIpamPool_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

