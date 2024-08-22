package alicloudroscdkcen


// Properties for defining a `CenInstanceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstanceattachment
type CenInstanceAttachmentProps struct {
	// Property cenId: The ID of the CEN instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property childInstanceId: The ID of the network to attach.
	ChildInstanceId interface{} `field:"required" json:"childInstanceId" yaml:"childInstanceId"`
	// Property childInstanceRegionId: The ID of the region where the network is located.
	//
	// The ID of the region where the network is located.
	ChildInstanceRegionId interface{} `field:"required" json:"childInstanceRegionId" yaml:"childInstanceRegionId"`
	// Property childInstanceType: The type of the network to attach.
	//
	// Support VPC, VBR or CCN.
	ChildInstanceType interface{} `field:"required" json:"childInstanceType" yaml:"childInstanceType"`
	// Property childInstanceOwnerId: The account ID to which the network belongs.
	ChildInstanceOwnerId interface{} `field:"optional" json:"childInstanceOwnerId" yaml:"childInstanceOwnerId"`
}

