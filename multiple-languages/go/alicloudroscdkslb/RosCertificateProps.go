package alicloudroscdkslb


// Properties for defining a `RosCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-certificate
type RosCertificateProps struct {
	AliCloudCertificateId interface{} `field:"optional" json:"aliCloudCertificateId" yaml:"aliCloudCertificateId"`
	AliCloudCertificateName interface{} `field:"optional" json:"aliCloudCertificateName" yaml:"aliCloudCertificateName"`
	Certificate interface{} `field:"optional" json:"certificate" yaml:"certificate"`
	CertificateName interface{} `field:"optional" json:"certificateName" yaml:"certificateName"`
	CertificateType interface{} `field:"optional" json:"certificateType" yaml:"certificateType"`
	PrivateKey interface{} `field:"optional" json:"privateKey" yaml:"privateKey"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosCertificate_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

