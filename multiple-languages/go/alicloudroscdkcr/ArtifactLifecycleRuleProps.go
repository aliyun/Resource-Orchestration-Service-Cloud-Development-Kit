package alicloudroscdkcr


// Properties for defining a `ArtifactLifecycleRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
type ArtifactLifecycleRuleProps struct {
	// Property auto: Specify whether to automatically execute the lifecycle management rule.
	Auto interface{} `field:"required" json:"auto" yaml:"auto"`
	// Property instanceId: ACR Instance ID.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property namespaceName: The name of the namespace.
	NamespaceName interface{} `field:"optional" json:"namespaceName" yaml:"namespaceName"`
	// Property repoName: The name of the image repository.
	RepoName interface{} `field:"optional" json:"repoName" yaml:"repoName"`
	// Property retentionTagCount: The number of images that you want to retain.
	RetentionTagCount interface{} `field:"optional" json:"retentionTagCount" yaml:"retentionTagCount"`
	// Property scheduleTime: The execution cycle of the lifecycle management rule.
	ScheduleTime interface{} `field:"optional" json:"scheduleTime" yaml:"scheduleTime"`
	// Property scope: The deletion scope.
	Scope interface{} `field:"optional" json:"scope" yaml:"scope"`
	// Property tagRegexp: The regular expression that is used to indicate which image tags are retained.
	TagRegexp interface{} `field:"optional" json:"tagRegexp" yaml:"tagRegexp"`
}

