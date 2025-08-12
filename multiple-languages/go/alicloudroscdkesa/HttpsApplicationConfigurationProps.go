package alicloudroscdkesa


// Properties for defining a `HttpsApplicationConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
type HttpsApplicationConfigurationProps struct {
	// Property siteId: The site ID, which can be obtained by calling the ListSites API.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property altSvc: Function switch, default off.
	//
	// Value range:
	// on: Enabled.
	// off: Disabled.
	AltSvc interface{} `field:"optional" json:"altSvc" yaml:"altSvc"`
	// Property altSvcClear: Alt-Svc whether The header contains the clear parameter.
	//
	// This parameter is disabled by default. Value range:
	// on: Enabled.
	// off: Disabled.
	AltSvcClear interface{} `field:"optional" json:"altSvcClear" yaml:"altSvcClear"`
	// Property altSvcMa: The effective time of the Alt-Svc, in seconds.
	//
	// The default value is 86400 seconds.
	AltSvcMa interface{} `field:"optional" json:"altSvcMa" yaml:"altSvcMa"`
	// Property altSvcPersist: Alt-Svc whether The header contains the persist parameter.
	//
	// This parameter is disabled by default. Value range:
	// on: Enabled.
	// off: Disabled.
	AltSvcPersist interface{} `field:"optional" json:"altSvcPersist" yaml:"altSvcPersist"`
	// Property hsts: Whether to enable HSTS.
	//
	// It is disabled by default. Value range:
	// on: Enabled.
	// off: Disabled.
	Hsts interface{} `field:"optional" json:"hsts" yaml:"hsts"`
	// Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
	//
	// Value range:
	// on: Enabled.
	// off: Disabled.
	HstsIncludeSubdomains interface{} `field:"optional" json:"hstsIncludeSubdomains" yaml:"hstsIncludeSubdomains"`
	// Property hstsMaxAge: The expiration time of HSTS, in seconds.
	HstsMaxAge interface{} `field:"optional" json:"hstsMaxAge" yaml:"hstsMaxAge"`
	// Property hstsPreload: Whether to enable HSTS preloading.
	//
	// It is disabled by default. Value range:
	// on: Enabled.
	// off: Disabled.
	HstsPreload interface{} `field:"optional" json:"hstsPreload" yaml:"hstsPreload"`
	// Property httpsForce: Whether to enable forced HTTPS.
	//
	// It is disabled by default. Value range:
	// on: Enabled.
	// off: Disabled.
	HttpsForce interface{} `field:"optional" json:"httpsForce" yaml:"httpsForce"`
	// Property httpsForceCode: Forced HTTPS jump status code, value range: 301 302 307 308.
	HttpsForceCode interface{} `field:"optional" json:"httpsForceCode" yaml:"httpsForceCode"`
	// Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.
	//
	// This parameter is disabled by default. Value range:
	// on: Enabled.
	// off: Disabled.
	HttpsNoSniDeny interface{} `field:"optional" json:"httpsNoSniDeny" yaml:"httpsNoSniDeny"`
	// Property httpsSniVerify: Whether to enable SNI verification.
	//
	// It is disabled by default. Value range:
	// on: Enabled.
	// off: Disabled.
	HttpsSniVerify interface{} `field:"optional" json:"httpsSniVerify" yaml:"httpsSniVerify"`
	// Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
	HttpsSniWhitelist interface{} `field:"optional" json:"httpsSniWhitelist" yaml:"httpsSniWhitelist"`
	// Property paymentType: Payment Type.
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	// Property rule: Rule content, using conditional expressions to match user requests.
	//
	// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
	// Match all incoming requests: value set to true
	// Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	// Property ruleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set. Value range:
	// on: Enabled.
	// off: Disabled.
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	// Property ruleName: Rule name.
	//
	// When adding global configuration, this parameter does not need to be set.
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	// Property sequence: Order of rule execution.
	//
	// The smaller the value, the higher the priority for execution.
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	// Property siteVersion: The version number of the site configuration.
	//
	// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
}

