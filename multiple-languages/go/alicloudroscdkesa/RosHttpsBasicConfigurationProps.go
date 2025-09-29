package alicloudroscdkesa


// Properties for defining a `RosHttpsBasicConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsbasicconfiguration
type RosHttpsBasicConfigurationProps struct {
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Ciphersuite interface{} `field:"optional" json:"ciphersuite" yaml:"ciphersuite"`
	CiphersuiteGroup interface{} `field:"optional" json:"ciphersuiteGroup" yaml:"ciphersuiteGroup"`
	Http2 interface{} `field:"optional" json:"http2" yaml:"http2"`
	Http3 interface{} `field:"optional" json:"http3" yaml:"http3"`
	Https interface{} `field:"optional" json:"https" yaml:"https"`
	OcspStapling interface{} `field:"optional" json:"ocspStapling" yaml:"ocspStapling"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	Tls10 interface{} `field:"optional" json:"tls10" yaml:"tls10"`
	Tls11 interface{} `field:"optional" json:"tls11" yaml:"tls11"`
	Tls12 interface{} `field:"optional" json:"tls12" yaml:"tls12"`
	Tls13 interface{} `field:"optional" json:"tls13" yaml:"tls13"`
}

