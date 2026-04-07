package alicloudroscdkecs


// Properties for defining a `RosDedicatedHostCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhostcluster
type RosDedicatedHostClusterProps struct {
	DedicatedHostClusterName interface{} `field:"optional" json:"dedicatedHostClusterName" yaml:"dedicatedHostClusterName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosDedicatedHostCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

