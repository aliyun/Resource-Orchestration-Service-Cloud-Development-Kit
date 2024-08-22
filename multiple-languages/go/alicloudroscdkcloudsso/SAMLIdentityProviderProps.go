package alicloudroscdkcloudsso


// Properties for defining a `SAMLIdentityProvider`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
type SAMLIdentityProviderProps struct {
	// Property directoryId: The ID of the directory.
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	// Property encodedMetadataDocument: The metadata file of the IdP.
	//
	// The value of this parameter is Base64-encoded.
	// The file is provided by the IdP that supports SAML 2.0.
	EncodedMetadataDocument interface{} `field:"optional" json:"encodedMetadataDocument" yaml:"encodedMetadataDocument"`
	// Property entityId: The entity ID of the IdP.
	EntityId interface{} `field:"optional" json:"entityId" yaml:"entityId"`
	// Property loginUrl: The logon URL of the IdP.
	LoginUrl interface{} `field:"optional" json:"loginUrl" yaml:"loginUrl"`
	// Property ssoStatus: The status of SSO logon.
	//
	// Valid values:
	// - Enabled
	// - Disabled (default).
	SsoStatus interface{} `field:"optional" json:"ssoStatus" yaml:"ssoStatus"`
	// Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests.
	//
	// The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
	// - true: yes
	// - false: no (default).
	WantRequestSigned interface{} `field:"optional" json:"wantRequestSigned" yaml:"wantRequestSigned"`
	// Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
	X509Certificate interface{} `field:"optional" json:"x509Certificate" yaml:"x509Certificate"`
}

