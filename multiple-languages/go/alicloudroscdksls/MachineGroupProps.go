package alicloudroscdksls


// Properties for defining a `MachineGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup
type MachineGroupProps struct {
	// Property groupAttribute: Group attribute, default is null.
	//
	// The object value is groupToic and externalName.
	GroupAttribute interface{} `field:"optional" json:"groupAttribute" yaml:"groupAttribute"`
	// Property groupName: Display name of the group name, the Project only.
	//
	// [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	// Property groupType: MachineGroup type, the value is empty or Armory.
	GroupType interface{} `field:"optional" json:"groupType" yaml:"groupType"`
	// Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.
	MachineIdentifyType interface{} `field:"optional" json:"machineIdentifyType" yaml:"machineIdentifyType"`
	// Property machineList: The machine tag, the value is ip or userdefined-id.
	MachineList interface{} `field:"optional" json:"machineList" yaml:"machineList"`
	// Property projectName: MachineGroup created in project.
	ProjectName interface{} `field:"optional" json:"projectName" yaml:"projectName"`
}

