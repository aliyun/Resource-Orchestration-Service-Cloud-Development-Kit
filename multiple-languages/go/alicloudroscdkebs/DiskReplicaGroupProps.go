package alicloudroscdkebs


// Properties for defining a `DiskReplicaGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicagroup
type DiskReplicaGroupProps struct {
	// Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
	DestinationRegionId interface{} `field:"required" json:"destinationRegionId" yaml:"destinationRegionId"`
	// Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
	DestinationZoneId interface{} `field:"required" json:"destinationZoneId" yaml:"destinationZoneId"`
	// Property sourceRegionId: The ID of the region to which the production site belongs.
	SourceRegionId interface{} `field:"required" json:"sourceRegionId" yaml:"sourceRegionId"`
	// Property sourceZoneId: The ID of the zone to which the production site belongs.
	SourceZoneId interface{} `field:"required" json:"sourceZoneId" yaml:"sourceZoneId"`
	// Property description: The description of the consistent replication group.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property diskReplicaGroupName: Consistent replication group name.
	DiskReplicaGroupName interface{} `field:"optional" json:"diskReplicaGroupName" yaml:"diskReplicaGroupName"`
	// Property resourceGroupId: The ID of resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property rpo: The RPO value set by the consistency group in seconds.
	Rpo interface{} `field:"optional" json:"rpo" yaml:"rpo"`
	// Property tags: Tags of disk replica group.
	Tags *[]*RosDiskReplicaGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

