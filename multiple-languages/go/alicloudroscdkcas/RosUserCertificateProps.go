package alicloudroscdkcas


// Properties for defining a `RosUserCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate
type RosUserCertificateProps struct {
	Cert interface{} `field:"optional" json:"cert" yaml:"cert"`
	CertificateName interface{} `field:"optional" json:"certificateName" yaml:"certificateName"`
	EncryptCert interface{} `field:"optional" json:"encryptCert" yaml:"encryptCert"`
	EncryptPrivateKey interface{} `field:"optional" json:"encryptPrivateKey" yaml:"encryptPrivateKey"`
	Key interface{} `field:"optional" json:"key" yaml:"key"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ResourceId interface{} `field:"optional" json:"resourceId" yaml:"resourceId"`
	SignCert interface{} `field:"optional" json:"signCert" yaml:"signCert"`
	SignPrivateKey interface{} `field:"optional" json:"signPrivateKey" yaml:"signPrivateKey"`
	Tags *[]*RosUserCertificate_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

