package alicloudroscdkarms


// Properties for defining a `EnvPodMonitor`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envpodmonitor
type EnvPodMonitorProps struct {
	// Property configYaml: The YAML configuration string of the PodMonitor.
	ConfigYaml interface{} `field:"required" json:"configYaml" yaml:"configYaml"`
	// Property environmentId: The ID of the environment instance.
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	// Property aliyunLang: The language.
	//
	// Valid values: zh and en. Default value: zh.
	AliyunLang interface{} `field:"optional" json:"aliyunLang" yaml:"aliyunLang"`
}

