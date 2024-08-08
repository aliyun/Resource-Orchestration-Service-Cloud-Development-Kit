package alicloudroscdkalb


// Properties for defining a `AdditionalCertificateAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-additionalcertificateassociation
type AdditionalCertificateAssociationProps struct {
	// Property certificates: The list of the additional certificates.
	Certificates interface{} `field:"required" json:"certificates" yaml:"certificates"`
	// Property listenerId: The ID of the listener.
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
}

