package alicloudroscdkarms


// Properties for defining a `EnvServiceMonitor`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envservicemonitor
type EnvServiceMonitorProps struct {
	// Property configYaml: The YAML configuration string of the ServiceMonitor.
	ConfigYaml interface{} `field:"required" json:"configYaml" yaml:"configYaml"`
	// Property environmentId: The ID of the environment instance.
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	// Property aliyunLang: The language.
	//
	// Valid values: zh and en. Default value: zh.
	AliyunLang interface{} `field:"optional" json:"aliyunLang" yaml:"aliyunLang"`
}

