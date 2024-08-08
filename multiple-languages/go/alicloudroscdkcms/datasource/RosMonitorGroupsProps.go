package datasource


// Properties for defining a `RosMonitorGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroups
type RosMonitorGroupsProps struct {
	DynamicTagRuleId interface{} `field:"optional" json:"dynamicTagRuleId" yaml:"dynamicTagRuleId"`
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	MonitorGroupName interface{} `field:"optional" json:"monitorGroupName" yaml:"monitorGroupName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

