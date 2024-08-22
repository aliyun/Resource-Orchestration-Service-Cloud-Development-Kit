package alicloudroscdkflink


// Properties for defining a `Namespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
type NamespaceProps struct {
	// Property instanceId: Instance ID.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property namespace: Project space name.
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	// Property resourceSpec: Resource specifications.
	ResourceSpec interface{} `field:"optional" json:"resourceSpec" yaml:"resourceSpec"`
}

