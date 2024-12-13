package alicloudroscdkehpc


type RosClusterV2_AddonsProperty struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Version interface{} `field:"required" json:"version" yaml:"version"`
	ResourcesSpec interface{} `field:"optional" json:"resourcesSpec" yaml:"resourcesSpec"`
	ServicesSpec interface{} `field:"optional" json:"servicesSpec" yaml:"servicesSpec"`
}

