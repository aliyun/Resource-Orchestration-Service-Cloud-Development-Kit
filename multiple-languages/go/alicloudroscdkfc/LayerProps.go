package alicloudroscdkfc


// Properties for defining a `Layer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-layer
type LayerProps struct {
	// Property code: The code of layer.
	Code interface{} `field:"required" json:"code" yaml:"code"`
	// Property compatibleRuntime: The runtime environment supported by the layer.
	//
	// For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
	CompatibleRuntime interface{} `field:"required" json:"compatibleRuntime" yaml:"compatibleRuntime"`
	// Property layerName: The name of layer.
	LayerName interface{} `field:"required" json:"layerName" yaml:"layerName"`
	// Property description: The description of the layer.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

