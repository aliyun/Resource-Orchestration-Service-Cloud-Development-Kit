package alicloudroscdkcms


// Properties for defining a `MonitoringAgentProcess`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagentprocess
type MonitoringAgentProcessProps struct {
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property processName: The name of the process.
	ProcessName interface{} `field:"optional" json:"processName" yaml:"processName"`
	// Property processUser: The user who launched the process.
	ProcessUser interface{} `field:"optional" json:"processUser" yaml:"processUser"`
}

