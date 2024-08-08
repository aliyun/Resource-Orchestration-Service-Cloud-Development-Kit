package datasource


// Properties for defining a `Repositories`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-repositories
type RepositoriesProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property repoNamespace: The namespace of repository.
	RepoNamespace interface{} `field:"optional" json:"repoNamespace" yaml:"repoNamespace"`
	// Property status: The status of repository.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

