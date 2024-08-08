package alicloudroscdkcms


// Properties for defining a `RosMonitoringAgentProcess`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagentprocess
type RosMonitoringAgentProcessProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	ProcessName interface{} `field:"optional" json:"processName" yaml:"processName"`
	ProcessUser interface{} `field:"optional" json:"processUser" yaml:"processUser"`
}

