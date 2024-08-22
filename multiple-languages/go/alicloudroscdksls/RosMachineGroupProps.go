package alicloudroscdksls


// Properties for defining a `RosMachineGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup
type RosMachineGroupProps struct {
	GroupAttribute interface{} `field:"optional" json:"groupAttribute" yaml:"groupAttribute"`
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	GroupType interface{} `field:"optional" json:"groupType" yaml:"groupType"`
	MachineIdentifyType interface{} `field:"optional" json:"machineIdentifyType" yaml:"machineIdentifyType"`
	MachineList interface{} `field:"optional" json:"machineList" yaml:"machineList"`
	ProjectName interface{} `field:"optional" json:"projectName" yaml:"projectName"`
}

