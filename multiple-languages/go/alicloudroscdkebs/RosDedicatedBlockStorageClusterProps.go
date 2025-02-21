package alicloudroscdkebs


// Properties for defining a `RosDedicatedBlockStorageCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-dedicatedblockstoragecluster
type RosDedicatedBlockStorageClusterProps struct {
	Azone interface{} `field:"required" json:"azone" yaml:"azone"`
	Capacity interface{} `field:"required" json:"capacity" yaml:"capacity"`
	DbscName interface{} `field:"required" json:"dbscName" yaml:"dbscName"`
	Period interface{} `field:"required" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"required" json:"periodUnit" yaml:"periodUnit"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
}

