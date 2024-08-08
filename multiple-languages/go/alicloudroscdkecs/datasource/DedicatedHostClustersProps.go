package datasource


// Properties for defining a `DedicatedHostClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostclusters
type DedicatedHostClustersProps struct {
	// Property dedicatedHostClusterName: The name of the dedicated host cluster.
	DedicatedHostClusterName interface{} `field:"optional" json:"dedicatedHostClusterName" yaml:"dedicatedHostClusterName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
	//
	// If this parameter is specified to query resources,
	// up to 1,000 resources that belong to the specified resource group can be displayed in the response.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property zoneId: The zone ID of the dedicated host cluster.
	//
	// You can call the DescribeZones operation to query the most recent zone list.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

