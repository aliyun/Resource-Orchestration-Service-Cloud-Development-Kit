package alicloudroscdkros


type RosStackGroup_AutoDeploymentProperty struct {
	Enabled interface{} `field:"required" json:"enabled" yaml:"enabled"`
	RetainStacksOnAccountRemoval interface{} `field:"optional" json:"retainStacksOnAccountRemoval" yaml:"retainStacksOnAccountRemoval"`
}

