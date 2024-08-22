package alicloudroscdkprivatelink


// Properties for defining a `RosVpcEndpointServiceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointserviceattachment
type RosVpcEndpointServiceAttachmentProps struct {
	ResourceId interface{} `field:"required" json:"resourceId" yaml:"resourceId"`
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	ServiceId interface{} `field:"required" json:"serviceId" yaml:"serviceId"`
}

