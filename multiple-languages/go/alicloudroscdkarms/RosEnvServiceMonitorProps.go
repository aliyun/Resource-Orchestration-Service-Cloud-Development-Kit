package alicloudroscdkarms


// Properties for defining a `RosEnvServiceMonitor`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envservicemonitor
type RosEnvServiceMonitorProps struct {
	ConfigYaml interface{} `field:"required" json:"configYaml" yaml:"configYaml"`
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	AliyunLang interface{} `field:"optional" json:"aliyunLang" yaml:"aliyunLang"`
}

