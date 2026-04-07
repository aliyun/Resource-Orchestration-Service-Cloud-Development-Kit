package alicloudroscdkfc3


// Properties for defining a `LayerVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-layerversion
type LayerVersionProps struct {
	// Property layerName: Name of the layer.
	LayerName interface{} `field:"required" json:"layerName" yaml:"layerName"`
	// Property acl: The access permission of the layer, 1: public, 0: private, default is private.
	Acl interface{} `field:"optional" json:"acl" yaml:"acl"`
	// Property code: Layer code configuration.
	Code interface{} `field:"optional" json:"code" yaml:"code"`
	// Property compatibleRuntime: List of runtime environments supported by the layer.
	CompatibleRuntime interface{} `field:"optional" json:"compatibleRuntime" yaml:"compatibleRuntime"`
	// Property description: Description of the version.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property license: Layer License Agreement.
	License interface{} `field:"optional" json:"license" yaml:"license"`
}

