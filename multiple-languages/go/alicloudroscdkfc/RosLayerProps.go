package alicloudroscdkfc


// Properties for defining a `RosLayer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-layer
type RosLayerProps struct {
	Code interface{} `field:"required" json:"code" yaml:"code"`
	CompatibleRuntime interface{} `field:"required" json:"compatibleRuntime" yaml:"compatibleRuntime"`
	LayerName interface{} `field:"required" json:"layerName" yaml:"layerName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

