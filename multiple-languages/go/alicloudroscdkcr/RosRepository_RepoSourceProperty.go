package alicloudroscdkcr


type RosRepository_RepoSourceProperty struct {
	IsAutoBuild interface{} `field:"required" json:"isAutoBuild" yaml:"isAutoBuild"`
	IsDisableCache interface{} `field:"required" json:"isDisableCache" yaml:"isDisableCache"`
	IsOversea interface{} `field:"required" json:"isOversea" yaml:"isOversea"`
	SourceRepoName interface{} `field:"required" json:"sourceRepoName" yaml:"sourceRepoName"`
	SourceRepoNamespace interface{} `field:"required" json:"sourceRepoNamespace" yaml:"sourceRepoNamespace"`
	SourceRepoType interface{} `field:"required" json:"sourceRepoType" yaml:"sourceRepoType"`
}

