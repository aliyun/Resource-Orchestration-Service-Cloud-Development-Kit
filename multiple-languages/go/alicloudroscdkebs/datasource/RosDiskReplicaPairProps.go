package datasource


// Properties for defining a `RosDiskReplicaPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapair
type RosDiskReplicaPairProps struct {
	ReplicaPairId interface{} `field:"required" json:"replicaPairId" yaml:"replicaPairId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

