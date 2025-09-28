package alicloudroscdkgpdb


// Properties for defining a `RosSupabaseProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-supabaseproject
type RosSupabaseProjectProps struct {
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	ProjectSpec interface{} `field:"required" json:"projectSpec" yaml:"projectSpec"`
	SecurityIpList interface{} `field:"required" json:"securityIpList" yaml:"securityIpList"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	DiskPerformanceLevel interface{} `field:"optional" json:"diskPerformanceLevel" yaml:"diskPerformanceLevel"`
	StorageSize interface{} `field:"optional" json:"storageSize" yaml:"storageSize"`
}

