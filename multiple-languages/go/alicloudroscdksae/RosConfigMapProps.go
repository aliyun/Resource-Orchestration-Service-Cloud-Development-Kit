package alicloudroscdksae


// Properties for defining a `RosConfigMap`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap
type RosConfigMapProps struct {
	Data interface{} `field:"required" json:"data" yaml:"data"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

