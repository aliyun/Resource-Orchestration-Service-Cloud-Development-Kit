package alicloudroscdkflink


// Properties for defining a `NamespaceV2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespacev2
type NamespaceV2Props struct {
	// Property instanceId: Instance ID.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property namespace: Project space name.
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	// Property resourceSpec: Resource specifications.
	ResourceSpec interface{} `field:"optional" json:"resourceSpec" yaml:"resourceSpec"`
}

