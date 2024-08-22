package alicloudroscdkdevops


// Properties for defining a `HostGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup
type HostGroupProps struct {
	// Property name: Host group name.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
	OrganizationId interface{} `field:"required" json:"organizationId" yaml:"organizationId"`
	// Property serviceConnectionId: Service connection.
	ServiceConnectionId interface{} `field:"required" json:"serviceConnectionId" yaml:"serviceConnectionId"`
	// Property aliyunRegion: The aliyun region.
	AliyunRegion interface{} `field:"optional" json:"aliyunRegion" yaml:"aliyunRegion"`
	// Property ecsLabelKey: The tag key of the ECS.
	EcsLabelKey interface{} `field:"optional" json:"ecsLabelKey" yaml:"ecsLabelKey"`
	// Property ecsLabelValue: The tag value of the ECS.
	EcsLabelValue interface{} `field:"optional" json:"ecsLabelValue" yaml:"ecsLabelValue"`
	// Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.
	EcsType interface{} `field:"optional" json:"ecsType" yaml:"ecsType"`
	// Property envId: Environment id.
	EnvId interface{} `field:"optional" json:"envId" yaml:"envId"`
	// Property machineInfos: The machine infos.
	MachineInfos interface{} `field:"optional" json:"machineInfos" yaml:"machineInfos"`
	// Property tagIds: The ids of tag.
	TagIds interface{} `field:"optional" json:"tagIds" yaml:"tagIds"`
	// Property type: Host group type, currently only supports ECS.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

