package alicloudroscdksls


// Properties for defining a `RosAudit`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
type RosAuditProps struct {
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	VariableMap interface{} `field:"required" json:"variableMap" yaml:"variableMap"`
	MultiAccount interface{} `field:"optional" json:"multiAccount" yaml:"multiAccount"`
}

