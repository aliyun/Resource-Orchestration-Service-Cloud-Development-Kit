package datasource


// Properties for defining a `RosDiskReplicaGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups
type RosDiskReplicaGroupsProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Site interface{} `field:"optional" json:"site" yaml:"site"`
}

