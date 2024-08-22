package alicloudroscdkcs


type RosManagedKubernetesCluster_AddonsProperty struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	Disabled interface{} `field:"optional" json:"disabled" yaml:"disabled"`
	Version interface{} `field:"optional" json:"version" yaml:"version"`
}

