package alicloudroscdkga


// Properties for defining a `RosResourceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-resourceattachment
type RosResourceAttachmentProps struct {
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	AssociatedResourceId interface{} `field:"required" json:"associatedResourceId" yaml:"associatedResourceId"`
	AssociatedResourceRegionId interface{} `field:"required" json:"associatedResourceRegionId" yaml:"associatedResourceRegionId"`
	AssociatedResourceType interface{} `field:"required" json:"associatedResourceType" yaml:"associatedResourceType"`
	AssociatedMode interface{} `field:"optional" json:"associatedMode" yaml:"associatedMode"`
}

