package alicloudroscdkram


// Properties for defining a `SAMLProvider`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-samlprovider
type SAMLProviderProps struct {
	// Property samlProviderName: IdP Name.
	//
	// The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
	SamlProviderName interface{} `field:"required" json:"samlProviderName" yaml:"samlProviderName"`
	// Property description: The description can contain a maximum of 256 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property encodedSamlMetadataDocument: SAML metadata document.Base64 encoded. Provided by an identity provider that supports the SAML2.0 protocol. Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
	EncodedSamlMetadataDocument interface{} `field:"optional" json:"encodedSamlMetadataDocument" yaml:"encodedSamlMetadataDocument"`
	// Property samlMetadataDocument: SAML metadata document.
	//
	// The content must be 1 to 102,400 bytes in length.
	// Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
	SamlMetadataDocument interface{} `field:"optional" json:"samlMetadataDocument" yaml:"samlMetadataDocument"`
	// Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document.
	//
	// The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss:\/\/ros\/document\/demo and oss:\/\/ros\/document\/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
	// Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
	SamlMetadataDocumentUrl interface{} `field:"optional" json:"samlMetadataDocumentUrl" yaml:"samlMetadataDocumentUrl"`
}

