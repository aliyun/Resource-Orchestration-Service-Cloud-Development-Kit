package datasource


// Properties for defining a `DedicatedHosts`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhosts
type DedicatedHostsProps struct {
	// Property dedicatedHostClusterId: The ID of the dedicated host cluster.
	DedicatedHostClusterId interface{} `field:"optional" json:"dedicatedHostClusterId" yaml:"dedicatedHostClusterId"`
	// Property dedicatedHostIds: The IDs of the dedicated hosts.
	//
	// You can specify up to 100 dedicated host IDs.
	DedicatedHostIds interface{} `field:"optional" json:"dedicatedHostIds" yaml:"dedicatedHostIds"`
	// Property dedicatedHostName: The name of the dedicated host.
	DedicatedHostName interface{} `field:"optional" json:"dedicatedHostName" yaml:"dedicatedHostName"`
	// Property dedicatedHostType: The type of the dedicated host.
	DedicatedHostType interface{} `field:"optional" json:"dedicatedHostType" yaml:"dedicatedHostType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property status: The service status of the dedicated host.
	//
	// Valid values:
	// Available: The dedicated host is running normally.
	// UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
	//   PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
	// Default value: Available.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property tags: Tags of ddh.
	Tags *[]*RosDedicatedHosts_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property zoneId: The zone ID of the dedicated host.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

