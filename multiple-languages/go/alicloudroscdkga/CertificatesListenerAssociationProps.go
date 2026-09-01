package alicloudroscdkga


// Properties for defining a `CertificatesListenerAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-certificateslistenerassociation
type CertificatesListenerAssociationProps struct {
	// Property acceleratorId: The ID of the Global Accelerator instance.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property certificates: The additional certificates to associate with the HTTPS listener.
	Certificates interface{} `field:"required" json:"certificates" yaml:"certificates"`
	// Property listenerId: The ID of the HTTPS listener.
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
}

