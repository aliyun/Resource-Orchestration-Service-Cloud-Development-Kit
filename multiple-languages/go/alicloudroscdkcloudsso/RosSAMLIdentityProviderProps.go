package alicloudroscdkcloudsso


// Properties for defining a `RosSAMLIdentityProvider`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
type RosSAMLIdentityProviderProps struct {
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	EncodedMetadataDocument interface{} `field:"optional" json:"encodedMetadataDocument" yaml:"encodedMetadataDocument"`
	EntityId interface{} `field:"optional" json:"entityId" yaml:"entityId"`
	LoginUrl interface{} `field:"optional" json:"loginUrl" yaml:"loginUrl"`
	SsoStatus interface{} `field:"optional" json:"ssoStatus" yaml:"ssoStatus"`
	WantRequestSigned interface{} `field:"optional" json:"wantRequestSigned" yaml:"wantRequestSigned"`
	X509Certificate interface{} `field:"optional" json:"x509Certificate" yaml:"x509Certificate"`
}

