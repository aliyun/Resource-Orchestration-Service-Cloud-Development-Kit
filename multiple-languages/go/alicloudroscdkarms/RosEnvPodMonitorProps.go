package alicloudroscdkarms


// Properties for defining a `RosEnvPodMonitor`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envpodmonitor
type RosEnvPodMonitorProps struct {
	ConfigYaml interface{} `field:"required" json:"configYaml" yaml:"configYaml"`
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	AliyunLang interface{} `field:"optional" json:"aliyunLang" yaml:"aliyunLang"`
}

