package datasource


// Properties for defining a `RosDedicatedBlockStorageCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstoragecluster
type RosDedicatedBlockStorageClusterProps struct {
	DedicatedBlockStorageClusterId interface{} `field:"required" json:"dedicatedBlockStorageClusterId" yaml:"dedicatedBlockStorageClusterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

