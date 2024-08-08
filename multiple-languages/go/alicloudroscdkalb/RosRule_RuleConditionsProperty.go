package alicloudroscdkalb


type RosRule_RuleConditionsProperty struct {
	Type interface{} `field:"required" json:"type" yaml:"type"`
	CookieConfig interface{} `field:"optional" json:"cookieConfig" yaml:"cookieConfig"`
	HeaderConfig interface{} `field:"optional" json:"headerConfig" yaml:"headerConfig"`
	HostConfig interface{} `field:"optional" json:"hostConfig" yaml:"hostConfig"`
	MethodConfig interface{} `field:"optional" json:"methodConfig" yaml:"methodConfig"`
	PathConfig interface{} `field:"optional" json:"pathConfig" yaml:"pathConfig"`
	QueryStringConfig interface{} `field:"optional" json:"queryStringConfig" yaml:"queryStringConfig"`
	ResponseHeaderConfig interface{} `field:"optional" json:"responseHeaderConfig" yaml:"responseHeaderConfig"`
	ResponseStatusCodeConfig interface{} `field:"optional" json:"responseStatusCodeConfig" yaml:"responseStatusCodeConfig"`
	SourceIpConfig interface{} `field:"optional" json:"sourceIpConfig" yaml:"sourceIpConfig"`
}

