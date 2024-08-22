package datasource


// Properties for defining a `RosGitCodeRepo`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-gitcoderepo
type RosGitCodeRepoProps struct {
	Owner interface{} `field:"required" json:"owner" yaml:"owner"`
	Platform interface{} `field:"required" json:"platform" yaml:"platform"`
	Repository interface{} `field:"required" json:"repository" yaml:"repository"`
	CommitId interface{} `field:"optional" json:"commitId" yaml:"commitId"`
	Organization interface{} `field:"optional" json:"organization" yaml:"organization"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

