package alicloudroscdkflink


// Properties for defining a `RosNamespaceV2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespacev2
type RosNamespaceV2Props struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	ResourceSpec interface{} `field:"optional" json:"resourceSpec" yaml:"resourceSpec"`
}

