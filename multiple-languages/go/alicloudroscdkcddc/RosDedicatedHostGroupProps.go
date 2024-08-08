package alicloudroscdkcddc


// Properties for defining a `RosDedicatedHostGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup
type RosDedicatedHostGroupProps struct {
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	AllocationPolicy interface{} `field:"optional" json:"allocationPolicy" yaml:"allocationPolicy"`
	CpuAllocationRatio interface{} `field:"optional" json:"cpuAllocationRatio" yaml:"cpuAllocationRatio"`
	DedicatedHostGroupDesc interface{} `field:"optional" json:"dedicatedHostGroupDesc" yaml:"dedicatedHostGroupDesc"`
	DiskAllocationRatio interface{} `field:"optional" json:"diskAllocationRatio" yaml:"diskAllocationRatio"`
	HostReplacePolicy interface{} `field:"optional" json:"hostReplacePolicy" yaml:"hostReplacePolicy"`
	MemAllocationRatio interface{} `field:"optional" json:"memAllocationRatio" yaml:"memAllocationRatio"`
	OpenPermission interface{} `field:"optional" json:"openPermission" yaml:"openPermission"`
}

