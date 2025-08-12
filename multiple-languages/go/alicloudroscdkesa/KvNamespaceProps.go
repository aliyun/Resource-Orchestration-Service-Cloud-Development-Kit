package alicloudroscdkesa


// Properties for defining a `KvNamespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
type KvNamespaceProps struct {
	// Property kvNamespace: The name of the namespace.
	KvNamespace interface{} `field:"required" json:"kvNamespace" yaml:"kvNamespace"`
	// Property description: The description of the namespace.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

