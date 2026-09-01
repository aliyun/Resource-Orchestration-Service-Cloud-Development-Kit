package alicloudroscdkcen


// Properties for defining a `CenInstanceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstanceattachment
type CenInstanceAttachmentProps struct {
	// Property cenId: The ID of the CEN instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property childInstanceId: The ID of the network to attach.
	ChildInstanceId interface{} `field:"required" json:"childInstanceId" yaml:"childInstanceId"`
	// Property childInstanceRegionId: The ID of the region where the network instance is deployed.
	//
	// You can call the [DescribeRegions]() operation to query the most recent region
	// list.
	ChildInstanceRegionId interface{} `field:"required" json:"childInstanceRegionId" yaml:"childInstanceRegionId"`
	// Property childInstanceType: The type of the network to attach.
	//
	// Support VPC, VBR or CCN.
	ChildInstanceType interface{} `field:"required" json:"childInstanceType" yaml:"childInstanceType"`
	// Property childInstanceOwnerId: The ID of the account to which the network instance belongs.
	//
	// > If the network instance and the CEN instance belong to different accounts,
	// this parameter is required.
	ChildInstanceOwnerId interface{} `field:"optional" json:"childInstanceOwnerId" yaml:"childInstanceOwnerId"`
}

