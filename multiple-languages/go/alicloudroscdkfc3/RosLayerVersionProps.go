package alicloudroscdkfc3


// Properties for defining a `RosLayerVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-layerversion
type RosLayerVersionProps struct {
	LayerName interface{} `field:"required" json:"layerName" yaml:"layerName"`
	Acl interface{} `field:"optional" json:"acl" yaml:"acl"`
	Code interface{} `field:"optional" json:"code" yaml:"code"`
	CompatibleRuntime interface{} `field:"optional" json:"compatibleRuntime" yaml:"compatibleRuntime"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	License interface{} `field:"optional" json:"license" yaml:"license"`
}

