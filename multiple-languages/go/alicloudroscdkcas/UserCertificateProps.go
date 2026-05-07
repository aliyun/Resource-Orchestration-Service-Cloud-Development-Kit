package alicloudroscdkcas


// Properties for defining a `UserCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate
type UserCertificateProps struct {
	// Property cert: The certificate content in PEM format.
	Cert interface{} `field:"optional" json:"cert" yaml:"cert"`
	// Property certificateName: Custom certificate name.
	//
	// Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
	//   The certificate name under the same user cannot be duplicated.
	CertificateName interface{} `field:"optional" json:"certificateName" yaml:"certificateName"`
	// Property encryptCert: The content of the encryption certificate in PEM format.
	EncryptCert interface{} `field:"optional" json:"encryptCert" yaml:"encryptCert"`
	// Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.
	EncryptPrivateKey interface{} `field:"optional" json:"encryptPrivateKey" yaml:"encryptPrivateKey"`
	// Property key: The private key content of the certificate in PEM format.
	Key interface{} `field:"optional" json:"key" yaml:"key"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property resourceId: Resource ID.
	ResourceId interface{} `field:"optional" json:"resourceId" yaml:"resourceId"`
	// Property signCert: The signature certificate content in PEM format.
	SignCert interface{} `field:"optional" json:"signCert" yaml:"signCert"`
	// Property signPrivateKey: The private key content of the signature certificate in PEM format.
	SignPrivateKey interface{} `field:"optional" json:"signPrivateKey" yaml:"signPrivateKey"`
	// Property tags: Tags of certificate.
	Tags *[]*RosUserCertificate_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

