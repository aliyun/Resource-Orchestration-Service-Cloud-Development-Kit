package alicloudroscdkcddc


// Properties for defining a `DedicatedHostGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup
type DedicatedHostGroupProps struct {
	// Property engine: Database Engine Type.
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	// Property vpcId: VPC ID.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property allocationPolicy: Allocation Policy.
	AllocationPolicy interface{} `field:"optional" json:"allocationPolicy" yaml:"allocationPolicy"`
	// Property cpuAllocationRatio: Cpu Allocation Ratio.
	CpuAllocationRatio interface{} `field:"optional" json:"cpuAllocationRatio" yaml:"cpuAllocationRatio"`
	// Property dedicatedHostGroupDesc: Dedicated Host Group Description.
	DedicatedHostGroupDesc interface{} `field:"optional" json:"dedicatedHostGroupDesc" yaml:"dedicatedHostGroupDesc"`
	// Property diskAllocationRatio: Disk Allocation Ratio.
	DiskAllocationRatio interface{} `field:"optional" json:"diskAllocationRatio" yaml:"diskAllocationRatio"`
	// Property hostReplacePolicy: Host Replace Policy.
	HostReplacePolicy interface{} `field:"optional" json:"hostReplacePolicy" yaml:"hostReplacePolicy"`
	// Property memAllocationRatio: Memory Allocation Ratio.
	MemAllocationRatio interface{} `field:"optional" json:"memAllocationRatio" yaml:"memAllocationRatio"`
	// Property openPermission: Whether Open OS Permission.
	OpenPermission interface{} `field:"optional" json:"openPermission" yaml:"openPermission"`
}

