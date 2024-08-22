package datasource


// Properties for defining a `RosDiskReplicaPairs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
type RosDiskReplicaPairsProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

