package alicloudroscdkcms


// Properties for defining a `RosNamespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-namespace
type RosNamespaceProps struct {
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Specification interface{} `field:"optional" json:"specification" yaml:"specification"`
}

