package alicloudroscdkecs


// Properties for defining a `RosHpcCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-hpccluster
type RosHpcClusterProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

