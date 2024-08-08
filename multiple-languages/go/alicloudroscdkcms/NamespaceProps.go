package alicloudroscdkcms


// Properties for defining a `Namespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-namespace
type NamespaceProps struct {
	// Property namespace: The name of the namespace.
	//
	// The name can contain lowercase letters, digits, and hyphens (-).
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	// Property description: The description of the namespace.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property specification: The data retention period of the namespace.
	//
	// Valid values:
	// - cms.s1.large: Data storage duration is 15 days.
	// - cms.s1.xlarge: Data storage duration is 32 days.
	// - cms.s1.2xlarge: Data storage duration 63 days.
	// - cms.s1.3xlarge: Data storage duration 93 days.
	// - cms.s1.6xlarge: Data storage duration 185 days.
	// - cms.s1.12xlarge: Data storage duration 376 days.
	Specification interface{} `field:"optional" json:"specification" yaml:"specification"`
}

