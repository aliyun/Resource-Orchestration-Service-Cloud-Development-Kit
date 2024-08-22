package alicloudroscdkram


// Properties for defining a `RosApplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
type RosApplicationProps struct {
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	AppType interface{} `field:"required" json:"appType" yaml:"appType"`
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	AccessTokenValidity interface{} `field:"optional" json:"accessTokenValidity" yaml:"accessTokenValidity"`
	IsMultiTenant interface{} `field:"optional" json:"isMultiTenant" yaml:"isMultiTenant"`
	PredefinedScopes interface{} `field:"optional" json:"predefinedScopes" yaml:"predefinedScopes"`
	RedirectUris interface{} `field:"optional" json:"redirectUris" yaml:"redirectUris"`
	RefreshTokenValidity interface{} `field:"optional" json:"refreshTokenValidity" yaml:"refreshTokenValidity"`
	RequiredScopes interface{} `field:"optional" json:"requiredScopes" yaml:"requiredScopes"`
	SecretRequired interface{} `field:"optional" json:"secretRequired" yaml:"secretRequired"`
}

