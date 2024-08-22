package datasource


// Properties for defining a `RosClusterNodePools`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools
type RosClusterNodePoolsProps struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

