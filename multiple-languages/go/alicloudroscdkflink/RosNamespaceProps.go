package alicloudroscdkflink


// Properties for defining a `RosNamespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
type RosNamespaceProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	ResourceSpec interface{} `field:"optional" json:"resourceSpec" yaml:"resourceSpec"`
}

