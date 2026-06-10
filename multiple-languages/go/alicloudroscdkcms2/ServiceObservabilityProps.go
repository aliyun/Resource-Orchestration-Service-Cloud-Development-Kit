package alicloudroscdkcms2


// Properties for defining a `ServiceObservability`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability
type ServiceObservabilityProps struct {
	// Property type: The type of the service observability.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property workspace: The workspace of the service observability.
	Workspace interface{} `field:"required" json:"workspace" yaml:"workspace"`
}

