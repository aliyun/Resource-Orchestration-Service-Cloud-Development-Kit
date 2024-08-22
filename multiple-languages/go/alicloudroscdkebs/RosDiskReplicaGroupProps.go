package alicloudroscdkebs


// Properties for defining a `RosDiskReplicaGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicagroup
type RosDiskReplicaGroupProps struct {
	DestinationRegionId interface{} `field:"required" json:"destinationRegionId" yaml:"destinationRegionId"`
	DestinationZoneId interface{} `field:"required" json:"destinationZoneId" yaml:"destinationZoneId"`
	SourceRegionId interface{} `field:"required" json:"sourceRegionId" yaml:"sourceRegionId"`
	SourceZoneId interface{} `field:"required" json:"sourceZoneId" yaml:"sourceZoneId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskReplicaGroupName interface{} `field:"optional" json:"diskReplicaGroupName" yaml:"diskReplicaGroupName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Rpo interface{} `field:"optional" json:"rpo" yaml:"rpo"`
	Tags *[]*RosDiskReplicaGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

