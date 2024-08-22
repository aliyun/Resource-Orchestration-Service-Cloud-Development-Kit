package alicloudroscdkalb


// Properties for defining a `RosAdditionalCertificateAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-additionalcertificateassociation
type RosAdditionalCertificateAssociationProps struct {
	Certificates interface{} `field:"required" json:"certificates" yaml:"certificates"`
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
}

