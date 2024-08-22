package alicloudroscdkcr


// Properties for defining a `RosNamespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
type RosNamespaceProps struct {
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	AutoCreate interface{} `field:"optional" json:"autoCreate" yaml:"autoCreate"`
	DefaultVisibility interface{} `field:"optional" json:"defaultVisibility" yaml:"defaultVisibility"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
}

