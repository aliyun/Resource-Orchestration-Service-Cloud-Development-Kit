package alicloudroscdkprivatelink


// Properties for defining a `VpcEndpointServiceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointserviceattachment
type VpcEndpointServiceAttachmentProps struct {
	// Property resourceId: The resource id.
	ResourceId interface{} `field:"required" json:"resourceId" yaml:"resourceId"`
	// Property resourceType: The resource type.
	//
	// Allowed values:
	// - slb: indicates a Classic Load Balancer (CLB) instance whose service resource type is a private network and supports the PrivateLink function.
	// - alb: indicates an Application Load Balancer (ALB) instance whose service resources are private networks and which supports the PrivateLink function.
	// - nlb: indicates a Network Load Balancer (NLB) instance that uses private network resources and supports the PrivateLink function.
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	// Property serviceId: The endpoint service that is associated with the endpoint.
	ServiceId interface{} `field:"required" json:"serviceId" yaml:"serviceId"`
}

