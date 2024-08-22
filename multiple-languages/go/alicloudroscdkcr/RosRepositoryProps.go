package alicloudroscdkcr


// Properties for defining a `RosRepository`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
type RosRepositoryProps struct {
	RepoName interface{} `field:"required" json:"repoName" yaml:"repoName"`
	RepoNamespace interface{} `field:"required" json:"repoNamespace" yaml:"repoNamespace"`
	RepoType interface{} `field:"required" json:"repoType" yaml:"repoType"`
	Summary interface{} `field:"required" json:"summary" yaml:"summary"`
	Detail interface{} `field:"optional" json:"detail" yaml:"detail"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	RepoSource interface{} `field:"optional" json:"repoSource" yaml:"repoSource"`
	TagImmutability interface{} `field:"optional" json:"tagImmutability" yaml:"tagImmutability"`
}

