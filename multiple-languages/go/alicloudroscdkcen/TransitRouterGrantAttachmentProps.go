package alicloudroscdkcen


// Properties for defining a `TransitRouterGrantAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutergrantattachment
type TransitRouterGrantAttachmentProps struct {
	// Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner.
	CenOwnerId interface{} `field:"required" json:"cenOwnerId" yaml:"cenOwnerId"`
	// Property instanceId: The ID of the network instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property instanceType: The type of the network instance.
	//
	// Valid values:
	// - VPC: Virtual Private Cloud instance.
	// - ExpressConnect: Virtual Border Router (VBR) instance.
	// - VPN: IPsec connection.
	// - ECR: ECR instance.
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	// Property orderType: The billing method for the network instance.
	//
	// Valid values:
	// - PayByCenOwner: The fees incurred by the network instance are paid by the owner of the CEN instance.
	// - PayByResourceOwner: The fees incurred by the network instance are paid by the owner of the network instance.
	OrderType interface{} `field:"optional" json:"orderType" yaml:"orderType"`
}

