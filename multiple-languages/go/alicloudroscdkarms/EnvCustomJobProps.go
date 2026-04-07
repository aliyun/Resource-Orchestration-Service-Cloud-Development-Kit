package alicloudroscdkarms


// Properties for defining a `EnvCustomJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envcustomjob
type EnvCustomJobProps struct {
	// Property configYaml: The YAML configuration string of the custom job.
	ConfigYaml interface{} `field:"required" json:"configYaml" yaml:"configYaml"`
	// Property envCustomJobName: The name of the custom job.
	EnvCustomJobName interface{} `field:"required" json:"envCustomJobName" yaml:"envCustomJobName"`
	// Property environmentId: The ID of the environment instance.
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	// Property aliyunLang: The language.
	//
	// Valid values: zh and en. Default value: zh.
	AliyunLang interface{} `field:"optional" json:"aliyunLang" yaml:"aliyunLang"`
}

