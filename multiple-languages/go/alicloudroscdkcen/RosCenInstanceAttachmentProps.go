package alicloudroscdkcen


// Properties for defining a `RosCenInstanceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstanceattachment
type RosCenInstanceAttachmentProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	ChildInstanceId interface{} `field:"required" json:"childInstanceId" yaml:"childInstanceId"`
	ChildInstanceRegionId interface{} `field:"required" json:"childInstanceRegionId" yaml:"childInstanceRegionId"`
	ChildInstanceType interface{} `field:"required" json:"childInstanceType" yaml:"childInstanceType"`
	ChildInstanceOwnerId interface{} `field:"optional" json:"childInstanceOwnerId" yaml:"childInstanceOwnerId"`
}

