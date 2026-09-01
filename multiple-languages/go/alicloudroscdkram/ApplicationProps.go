package alicloudroscdkram


// Properties for defining a `Application`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
type ApplicationProps struct {
	// Property appName: The name of the application.
	//
	// The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	// Property appType: The type of the application.
	//
	// Valid values:
	// - **WebApp**: a web application that interacts with a browser.
	// - **NativeApp**: a native application that runs on an operating system, such as a desktop operating system or a mobile operating system.
	// - **ServerApp**: an application that accesses Alibaba Cloud services without the need of manual user logon. User provisioning is automated based on the System for Cross-Domain Identity Management (SCIM) protocol.
	AppType interface{} `field:"required" json:"appType" yaml:"appType"`
	// Property displayName: The display name of the application.
	//
	// The name can be up to 24 characters in length.
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	// Property accessTokenValidity: The validity period of the access token.
	//
	// Valid values: 900 to 10800. Unit: seconds.
	// Default value: 3600.
	AccessTokenValidity interface{} `field:"optional" json:"accessTokenValidity" yaml:"accessTokenValidity"`
	// Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts.
	//
	// Valid values:
	// - **true**: If you do not set this parameter for applications of the NativeApp and ServerApp types, true is used.
	// - **false**: If you do not set this parameter for applications of the WebApp type, false is used.
	IsMultiTenant interface{} `field:"optional" json:"isMultiTenant" yaml:"isMultiTenant"`
	// Property predefinedScopes: List of the scopes of application permissions.
	PredefinedScopes interface{} `field:"optional" json:"predefinedScopes" yaml:"predefinedScopes"`
	// Property redirectUris: List of the callback URLs.
	RedirectUris interface{} `field:"optional" json:"redirectUris" yaml:"redirectUris"`
	// Property refreshTokenValidity: The validity period of the refresh token.
	//
	// Valid values: 7200 to 31536000. Unit: seconds.
	// Default value:
	// - If not specified, the default value is 2,592,000 seconds (30 days) for
	// NativeApp and ServerApp applications.
	// - If not specified, the default value is 7,776,000 seconds (90 days) for WebApp
	// applications.
	RefreshTokenValidity interface{} `field:"optional" json:"refreshTokenValidity" yaml:"refreshTokenValidity"`
	// Property requiredScopes: Required scope of application permissions.
	//
	// You can set one or more of the scopes set in the **PredefinedScopes** to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
	// **Notes**: If you set a **RequiredScopes** entry that is not within the scope of **PredefinedScopes**, the required range will not take effect.
	RequiredScopes interface{} `field:"optional" json:"requiredScopes" yaml:"requiredScopes"`
	// Property secretRequired: Indicates whether a secret is required.
	//
	// Valid values: **true** and **false**.
	// **Note**:
	// - For applications of the WebApp and ServerApp types, this parameter is automatically set to **true** and cannot be changed.
	// - For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified.
	SecretRequired interface{} `field:"optional" json:"secretRequired" yaml:"secretRequired"`
}

