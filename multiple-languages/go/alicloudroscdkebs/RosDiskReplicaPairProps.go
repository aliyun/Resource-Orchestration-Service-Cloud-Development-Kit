package alicloudroscdkebs


// Properties for defining a `RosDiskReplicaPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
type RosDiskReplicaPairProps struct {
	DestinationDiskId interface{} `field:"required" json:"destinationDiskId" yaml:"destinationDiskId"`
	DestinationRegionId interface{} `field:"required" json:"destinationRegionId" yaml:"destinationRegionId"`
	DestinationZoneId interface{} `field:"required" json:"destinationZoneId" yaml:"destinationZoneId"`
	DiskId interface{} `field:"required" json:"diskId" yaml:"diskId"`
	SourceZoneId interface{} `field:"required" json:"sourceZoneId" yaml:"sourceZoneId"`
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskReplicaPairName interface{} `field:"optional" json:"diskReplicaPairName" yaml:"diskReplicaPairName"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Rpo interface{} `field:"optional" json:"rpo" yaml:"rpo"`
	Tags *[]*RosDiskReplicaPair_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

