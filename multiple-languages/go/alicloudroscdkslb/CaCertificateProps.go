package alicloudroscdkslb


// Properties for defining a `CaCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-cacertificate
type CaCertificateProps struct {
	// Property caCertificate: The information about the CA certificate.
	CaCertificate interface{} `field:"required" json:"caCertificate" yaml:"caCertificate"`
	// Property caCertificateName: The CA certificate name.
	CaCertificateName interface{} `field:"optional" json:"caCertificateName" yaml:"caCertificateName"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of ca certificate.
	Tags *[]*RosCaCertificate_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

