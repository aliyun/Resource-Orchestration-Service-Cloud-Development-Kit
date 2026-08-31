package alicloudroscdkga


// Properties for defining a `RosCertificatesListenerAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-certificateslistenerassociation
type RosCertificatesListenerAssociationProps struct {
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	Certificates interface{} `field:"required" json:"certificates" yaml:"certificates"`
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
}

