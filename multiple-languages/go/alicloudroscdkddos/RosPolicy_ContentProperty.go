package alicloudroscdkddos


type RosPolicy_ContentProperty struct {
	BlackIpListExpireAt interface{} `field:"optional" json:"blackIpListExpireAt" yaml:"blackIpListExpireAt"`
	EnableDefense interface{} `field:"optional" json:"enableDefense" yaml:"enableDefense"`
	EnableDropIcmp interface{} `field:"optional" json:"enableDropIcmp" yaml:"enableDropIcmp"`
	EnableIntelligence interface{} `field:"optional" json:"enableIntelligence" yaml:"enableIntelligence"`
	FingerPrintRuleList interface{} `field:"optional" json:"fingerPrintRuleList" yaml:"fingerPrintRuleList"`
	IntelligenceLevel interface{} `field:"optional" json:"intelligenceLevel" yaml:"intelligenceLevel"`
	Layer4RuleList interface{} `field:"optional" json:"layer4RuleList" yaml:"layer4RuleList"`
	PortRuleList interface{} `field:"optional" json:"portRuleList" yaml:"portRuleList"`
	ReflectBlockUdpPortList interface{} `field:"optional" json:"reflectBlockUdpPortList" yaml:"reflectBlockUdpPortList"`
	RegionBlockCountryList interface{} `field:"optional" json:"regionBlockCountryList" yaml:"regionBlockCountryList"`
	RegionBlockProvinceList interface{} `field:"optional" json:"regionBlockProvinceList" yaml:"regionBlockProvinceList"`
	SourceBlockList interface{} `field:"optional" json:"sourceBlockList" yaml:"sourceBlockList"`
	SourceLimit interface{} `field:"optional" json:"sourceLimit" yaml:"sourceLimit"`
	WhitenGfbrNets interface{} `field:"optional" json:"whitenGfbrNets" yaml:"whitenGfbrNets"`
}

