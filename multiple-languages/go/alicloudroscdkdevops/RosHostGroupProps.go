package alicloudroscdkdevops


// Properties for defining a `RosHostGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup
type RosHostGroupProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	OrganizationId interface{} `field:"required" json:"organizationId" yaml:"organizationId"`
	ServiceConnectionId interface{} `field:"required" json:"serviceConnectionId" yaml:"serviceConnectionId"`
	AliyunRegion interface{} `field:"optional" json:"aliyunRegion" yaml:"aliyunRegion"`
	EcsLabelKey interface{} `field:"optional" json:"ecsLabelKey" yaml:"ecsLabelKey"`
	EcsLabelValue interface{} `field:"optional" json:"ecsLabelValue" yaml:"ecsLabelValue"`
	EcsType interface{} `field:"optional" json:"ecsType" yaml:"ecsType"`
	EnvId interface{} `field:"optional" json:"envId" yaml:"envId"`
	MachineInfos interface{} `field:"optional" json:"machineInfos" yaml:"machineInfos"`
	TagIds interface{} `field:"optional" json:"tagIds" yaml:"tagIds"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

