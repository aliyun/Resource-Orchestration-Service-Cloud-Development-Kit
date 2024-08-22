package datasource


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-paidswapi-instances
type RosInstancesProps struct {
	Accessibility interface{} `field:"optional" json:"accessibility" yaml:"accessibility"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	WorkspaceId interface{} `field:"optional" json:"workspaceId" yaml:"workspaceId"`
}

