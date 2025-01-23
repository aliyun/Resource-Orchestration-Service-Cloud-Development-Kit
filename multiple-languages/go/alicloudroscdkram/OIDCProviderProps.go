package alicloudroscdkram


// Properties for defining a `OIDCProvider`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-oidcprovider
type OIDCProviderProps struct {
	// Property fingerprints: The list of the fingerprints, max length is 5.
	Fingerprints interface{} `field:"required" json:"fingerprints" yaml:"fingerprints"`
	// Property issuerUrl: The URL of the issuer, which is provided by the external IdP.
	//
	// The URL of the issuer must be unique within an Alibaba Cloud account.
	// The URL of the issuer must start with https and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (?) or logon information that is identified by at signs (@). The URL cannot be a fragment URL that contains number signs (#).
	// The URL can be up to 255 characters in length.
	IssuerUrl interface{} `field:"required" json:"issuerUrl" yaml:"issuerUrl"`
	// Property oidcProviderName: The name of the OIDC IdP.
	//
	// The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
	// The name can be up to 128 characters in length.
	OidcProviderName interface{} `field:"required" json:"oidcProviderName" yaml:"oidcProviderName"`
	// Property clientIds: The list of the client IDs, max length is 20.
	ClientIds interface{} `field:"optional" json:"clientIds" yaml:"clientIds"`
	// Property description: The description of the OIDC IdP.
	//
	// The description can be up to 256 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token.
	//
	// If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
	IssuanceLimitTime interface{} `field:"optional" json:"issuanceLimitTime" yaml:"issuanceLimitTime"`
}

