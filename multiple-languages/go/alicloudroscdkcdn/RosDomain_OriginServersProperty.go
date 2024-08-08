package alicloudroscdkcdn


type RosDomain_OriginServersProperty struct {
	Content interface{} `field:"required" json:"content" yaml:"content"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	Weight interface{} `field:"optional" json:"weight" yaml:"weight"`
}

