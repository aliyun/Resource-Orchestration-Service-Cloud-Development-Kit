package alicloudroscdkslb


// Properties for defining a `Certificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-certificate
type CertificateProps struct {
	// Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
	AliCloudCertificateId interface{} `field:"optional" json:"aliCloudCertificateId" yaml:"aliCloudCertificateId"`
	// Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
	AliCloudCertificateName interface{} `field:"optional" json:"aliCloudCertificateName" yaml:"aliCloudCertificateName"`
	// Property certificate: The content of the certificate public key.
	Certificate interface{} `field:"optional" json:"certificate" yaml:"certificate"`
	// Property certificateName: The name of the certificate.
	CertificateName interface{} `field:"optional" json:"certificateName" yaml:"certificateName"`
	// Property certificateType: The type of the certificate.
	CertificateType interface{} `field:"optional" json:"certificateType" yaml:"certificateType"`
	// Property privateKey: The private key.
	PrivateKey interface{} `field:"optional" json:"privateKey" yaml:"privateKey"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCertificate_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

