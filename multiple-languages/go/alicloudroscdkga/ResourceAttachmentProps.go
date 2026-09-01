package alicloudroscdkga


// Properties for defining a `ResourceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-resourceattachment
type ResourceAttachmentProps struct {
	// Property acceleratorId: The ID of the GA instance.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property associatedResourceId: The ID of the associated resource.
	AssociatedResourceId interface{} `field:"required" json:"associatedResourceId" yaml:"associatedResourceId"`
	// Property associatedResourceRegionId: The region ID of the associated resource.
	AssociatedResourceRegionId interface{} `field:"required" json:"associatedResourceRegionId" yaml:"associatedResourceRegionId"`
	// Property associatedResourceType: The type of the associated resource.
	AssociatedResourceType interface{} `field:"required" json:"associatedResourceType" yaml:"associatedResourceType"`
	// Property associatedMode: The mode of the association.
	AssociatedMode interface{} `field:"optional" json:"associatedMode" yaml:"associatedMode"`
}

