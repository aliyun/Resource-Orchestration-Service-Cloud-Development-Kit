package alicloudroscdkpaidlc


type RosJob_JobSpecsProperty struct {
	EcsSpec interface{} `field:"required" json:"ecsSpec" yaml:"ecsSpec"`
	Image interface{} `field:"required" json:"image" yaml:"image"`
	PodCount interface{} `field:"required" json:"podCount" yaml:"podCount"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	UseSpotInstance interface{} `field:"required" json:"useSpotInstance" yaml:"useSpotInstance"`
	ExtraPodSpec interface{} `field:"optional" json:"extraPodSpec" yaml:"extraPodSpec"`
	ImageConfig interface{} `field:"optional" json:"imageConfig" yaml:"imageConfig"`
	ResourceConfig interface{} `field:"optional" json:"resourceConfig" yaml:"resourceConfig"`
}

