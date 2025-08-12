package alicloudroscdkesa


// Properties for defining a `RosKvNamespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
type RosKvNamespaceProps struct {
	KvNamespace interface{} `field:"required" json:"kvNamespace" yaml:"kvNamespace"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

