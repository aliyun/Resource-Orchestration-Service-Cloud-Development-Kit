package alicloudroscdkcr


// Properties for defining a `Repository`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
type RepositoryProps struct {
	// Property repoName: The name of the repository.
	RepoName interface{} `field:"required" json:"repoName" yaml:"repoName"`
	// Property repoNamespace: The name of the namespace to which the repository belongs.
	RepoNamespace interface{} `field:"required" json:"repoNamespace" yaml:"repoNamespace"`
	// Property repoType: The type of the repository.
	//
	// Valid values: PUBLIC, PRIVATE.
	RepoType interface{} `field:"required" json:"repoType" yaml:"repoType"`
	// Property summary: The summary of the repository.
	Summary interface{} `field:"required" json:"summary" yaml:"summary"`
	// Property detail: The description of the repository.
	Detail interface{} `field:"optional" json:"detail" yaml:"detail"`
	// Property instanceId: The ID of the enterprise edition instance which repository belongs to.
	//
	// If not provided, will use personal edition instance as default.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property repoSource: Code Source message.
	RepoSource interface{} `field:"optional" json:"repoSource" yaml:"repoSource"`
	// Property tagImmutability: Specifies whether the repository is immutable.
	//
	// Only takes effect when InstanceId is specified.
	TagImmutability interface{} `field:"optional" json:"tagImmutability" yaml:"tagImmutability"`
}

