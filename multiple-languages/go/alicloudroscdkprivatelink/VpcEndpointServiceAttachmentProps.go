package alicloudroscdkprivatelink


// Properties for defining a `VpcEndpointServiceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointserviceattachment
type VpcEndpointServiceAttachmentProps struct {
	// Property resourceId: The resource id.
	ResourceId interface{} `field:"required" json:"resourceId" yaml:"resourceId"`
	// Property resourceType: The type of the service resource.
	//
	// Valid values:
	// - slb: Classic Load Balancer (CLB).
	// - alb: Application Load Balancer (ALB).
	// - nlb: Network Load Balancer (NLB).
	// - gwlb: Gateway Load Balancer (GWLB).
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	// Property serviceId: The endpoint service that is associated with the endpoint.
	ServiceId interface{} `field:"required" json:"serviceId" yaml:"serviceId"`
	// Property zoneId: The zone where the service resource is located.
	//
	// This parameter is required if the
	// service resource is an ALB, NLB, or GWLB instance.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

