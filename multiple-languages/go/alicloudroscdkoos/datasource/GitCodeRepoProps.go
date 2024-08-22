package datasource


// Properties for defining a `GitCodeRepo`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-gitcoderepo
type GitCodeRepoProps struct {
	// Property owner: Git account.
	Owner interface{} `field:"required" json:"owner" yaml:"owner"`
	// Property platform: Git platform.
	Platform interface{} `field:"required" json:"platform" yaml:"platform"`
	// Property repository: Git repository.
	Repository interface{} `field:"required" json:"repository" yaml:"repository"`
	// Property commitId: Git commit id.
	CommitId interface{} `field:"optional" json:"commitId" yaml:"commitId"`
	// Property organization: Git organization.
	Organization interface{} `field:"optional" json:"organization" yaml:"organization"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

