package alicloudroscdkcr


// Properties for defining a `RosArtifactLifecycleRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
type RosArtifactLifecycleRuleProps struct {
	Auto interface{} `field:"required" json:"auto" yaml:"auto"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	NamespaceName interface{} `field:"optional" json:"namespaceName" yaml:"namespaceName"`
	RepoName interface{} `field:"optional" json:"repoName" yaml:"repoName"`
	RetentionTagCount interface{} `field:"optional" json:"retentionTagCount" yaml:"retentionTagCount"`
	ScheduleTime interface{} `field:"optional" json:"scheduleTime" yaml:"scheduleTime"`
	Scope interface{} `field:"optional" json:"scope" yaml:"scope"`
	TagRegexp interface{} `field:"optional" json:"tagRegexp" yaml:"tagRegexp"`
}

