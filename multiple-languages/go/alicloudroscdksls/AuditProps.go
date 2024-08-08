package alicloudroscdksls


// Properties for defining a `Audit`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
type AuditProps struct {
	// Property displayName: Name of SLS log audit.
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	// Property variableMap: Log audit detailed configuration.
	VariableMap interface{} `field:"required" json:"variableMap" yaml:"variableMap"`
	// Property multiAccount: Multi-account configuration, please fill in multiple aliuid.
	MultiAccount interface{} `field:"optional" json:"multiAccount" yaml:"multiAccount"`
}

