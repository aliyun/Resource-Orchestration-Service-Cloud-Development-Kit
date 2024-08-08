package alicloudroscdkcr


// Properties for defining a `Namespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
type NamespaceProps struct {
	// Property namespace: The name of the namespace.
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	// Property autoCreate: Specifies whether to automatically create an image repository.
	AutoCreate interface{} `field:"optional" json:"autoCreate" yaml:"autoCreate"`
	// Property defaultVisibility: The default type of the repository that is automatically created.
	//
	// Valid values: PUBLIC, PRIVATE.
	DefaultVisibility interface{} `field:"optional" json:"defaultVisibility" yaml:"defaultVisibility"`
	// Property instanceId: The ID of the enterprise edition instance which namespace belongs to.
	//
	// If not provided, will use personal edition instance as default.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
}

