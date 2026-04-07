package alicloudroscdkslb


// Properties for defining a `RosCaCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-cacertificate
type RosCaCertificateProps struct {
	CaCertificate interface{} `field:"required" json:"caCertificate" yaml:"caCertificate"`
	CaCertificateName interface{} `field:"optional" json:"caCertificateName" yaml:"caCertificateName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosCaCertificate_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

