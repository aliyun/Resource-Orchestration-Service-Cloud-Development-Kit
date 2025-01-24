package alicloudroscdkram


// Properties for defining a `RosOIDCProvider`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-oidcprovider
type RosOIDCProviderProps struct {
	Fingerprints interface{} `field:"required" json:"fingerprints" yaml:"fingerprints"`
	IssuerUrl interface{} `field:"required" json:"issuerUrl" yaml:"issuerUrl"`
	OidcProviderName interface{} `field:"required" json:"oidcProviderName" yaml:"oidcProviderName"`
	ClientIds interface{} `field:"optional" json:"clientIds" yaml:"clientIds"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	IssuanceLimitTime interface{} `field:"optional" json:"issuanceLimitTime" yaml:"issuanceLimitTime"`
}

