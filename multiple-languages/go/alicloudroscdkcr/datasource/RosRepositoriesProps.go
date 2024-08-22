package datasource


// Properties for defining a `RosRepositories`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-repositories
type RosRepositoriesProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	RepoNamespace interface{} `field:"optional" json:"repoNamespace" yaml:"repoNamespace"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

