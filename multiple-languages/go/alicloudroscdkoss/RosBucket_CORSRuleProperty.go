package alicloudroscdkoss


type RosBucket_CORSRuleProperty struct {
	AllowedHeader interface{} `field:"optional" json:"allowedHeader" yaml:"allowedHeader"`
	AllowedMethod interface{} `field:"optional" json:"allowedMethod" yaml:"allowedMethod"`
	AllowedOrigin interface{} `field:"optional" json:"allowedOrigin" yaml:"allowedOrigin"`
	ExposeHeader interface{} `field:"optional" json:"exposeHeader" yaml:"exposeHeader"`
	MaxAgeSeconds interface{} `field:"optional" json:"maxAgeSeconds" yaml:"maxAgeSeconds"`
}

