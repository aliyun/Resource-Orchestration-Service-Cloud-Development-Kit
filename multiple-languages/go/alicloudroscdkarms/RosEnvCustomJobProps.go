package alicloudroscdkarms


// Properties for defining a `RosEnvCustomJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envcustomjob
type RosEnvCustomJobProps struct {
	ConfigYaml interface{} `field:"required" json:"configYaml" yaml:"configYaml"`
	EnvCustomJobName interface{} `field:"required" json:"envCustomJobName" yaml:"envCustomJobName"`
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	AliyunLang interface{} `field:"optional" json:"aliyunLang" yaml:"aliyunLang"`
}

