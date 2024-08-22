package alicloudroscdksls


// Properties for defining a `ApplyConfigToMachineGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup
type ApplyConfigToMachineGroupProps struct {
	// Property configName: Apply config to the config name.
	ConfigName interface{} `field:"optional" json:"configName" yaml:"configName"`
	// Property groupName: Apply config to the group name.
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	// Property projectName: Apply config to the project name.
	ProjectName interface{} `field:"optional" json:"projectName" yaml:"projectName"`
}

