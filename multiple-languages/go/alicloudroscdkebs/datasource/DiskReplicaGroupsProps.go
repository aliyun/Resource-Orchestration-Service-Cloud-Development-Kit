package datasource


// Properties for defining a `DiskReplicaGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups
type DiskReplicaGroupsProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property site: Site information sources for replication pairs and consistent replication groups.
	//
	// Possible values:
	// - production: production site.
	// - backup: disaster recovery site.
	Site interface{} `field:"optional" json:"site" yaml:"site"`
}

