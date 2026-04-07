package alicloudroscdkecs


// Properties for defining a `DedicatedHostCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhostcluster
type DedicatedHostClusterProps struct {
	// Property dedicatedHostClusterName: The name of the host group.
	//
	// It must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
	DedicatedHostClusterName interface{} `field:"optional" json:"dedicatedHostClusterName" yaml:"dedicatedHostClusterName"`
	// Property description: The description of the host group.
	//
	// It must be 2 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property resourceGroupId: The resource group ID of the host group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of dedicated host cluster.
	Tags *[]*RosDedicatedHostCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property zoneId: The zone ID of the host group.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

