package alicloudroscdkcore


type RosResourceProps struct {
	// ROS template resource type (e.g. `ALIYUN::ECS::Instance`).
	Type *string `field:"required" json:"type" yaml:"type"`
	// Resource properties.
	Properties *map[string]interface{} `field:"optional" json:"properties" yaml:"properties"`
}

