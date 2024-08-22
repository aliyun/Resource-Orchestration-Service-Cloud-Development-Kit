package alicloudroscdkdevops


type RosHostGroup_MachineInfosProperty struct {
	MachineSn interface{} `field:"required" json:"machineSn" yaml:"machineSn"`
	AliyunRegionId interface{} `field:"optional" json:"aliyunRegionId" yaml:"aliyunRegionId"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	Ip interface{} `field:"optional" json:"ip" yaml:"ip"`
}

