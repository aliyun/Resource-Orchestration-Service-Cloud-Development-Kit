package alicloudroscdkesa


// Properties for defining a `HttpsBasicConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsbasicconfiguration
type HttpsBasicConfigurationProps struct {
	// Property siteId: Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
	Ciphersuite interface{} `field:"optional" json:"ciphersuite" yaml:"ciphersuite"`
	// Property ciphersuiteGroup: Cipher suite group.
	//
	// Default is all cipher suites. Possible values:
	// - all: All cipher suites.
	// - strict: Strong cipher suites.
	// - custom: Custom cipher suites.
	CiphersuiteGroup interface{} `field:"optional" json:"ciphersuiteGroup" yaml:"ciphersuiteGroup"`
	// Property http2: Indicates whether HTTP2 is enabled.
	//
	// Default is on. Possible values:
	// - on: Enabled.
	// - off: Disabled.
	Http2 interface{} `field:"optional" json:"http2" yaml:"http2"`
	// Property http3: Whether to enable HTTP3, which is enabled by default.
	//
	// The value can be:
	// - on: Enabled.
	// - off: Disabled.
	Http3 interface{} `field:"optional" json:"http3" yaml:"http3"`
	// Property https: Whether to enable HTTPS.
	//
	// Default is enabled. Possible values:
	// - on: Enable.
	// - off: Disable.
	Https interface{} `field:"optional" json:"https" yaml:"https"`
	// Property ocspStapling: Indicates whether OCSP is enabled.
	//
	// Default is off. Possible values:
	// - on: Enabled.
	// - off: Disabled.
	OcspStapling interface{} `field:"optional" json:"ocspStapling" yaml:"ocspStapling"`
	// Property rule: Rule content, using conditional expressions to match user requests.
	//
	// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
	// -  Match all incoming requests: value set to true
	// -  Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	// Property ruleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set. Value range:
	// - on: open.
	// - off: close.
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	// Property ruleName: Rule name.
	//
	// When adding global configuration, this parameter does not need to be set.
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	// Property sequence: Order of rule execution.
	//
	// The smaller the value, the higher the priority for execution.
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	// Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values: - on: Enable. - off: Disable.
	Tls10 interface{} `field:"optional" json:"tls10" yaml:"tls10"`
	// Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values: - on: Enable. - off: Disable.
	Tls11 interface{} `field:"optional" json:"tls11" yaml:"tls11"`
	// Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values: - on: Enable. - off: Disable.
	Tls12 interface{} `field:"optional" json:"tls12" yaml:"tls12"`
	// Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values: - on: Enable. - off: Disable.
	Tls13 interface{} `field:"optional" json:"tls13" yaml:"tls13"`
}

