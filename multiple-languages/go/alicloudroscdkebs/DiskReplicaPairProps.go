package alicloudroscdkebs


// Properties for defining a `DiskReplicaPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
type DiskReplicaPairProps struct {
	// Property destinationDiskId: The ID of the standby disk.
	DestinationDiskId interface{} `field:"required" json:"destinationDiskId" yaml:"destinationDiskId"`
	// Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
	DestinationRegionId interface{} `field:"required" json:"destinationRegionId" yaml:"destinationRegionId"`
	// Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
	DestinationZoneId interface{} `field:"required" json:"destinationZoneId" yaml:"destinationZoneId"`
	// Property diskId: The ID of the primary disk.
	DiskId interface{} `field:"required" json:"diskId" yaml:"diskId"`
	// Property sourceZoneId: The ID of the zone to which the production site belongs.
	SourceZoneId interface{} `field:"required" json:"sourceZoneId" yaml:"sourceZoneId"`
	// Property bandwidth: The bandwidth for asynchronous data replication between cloud disks.
	//
	// The unit is Kbps. Value range:
	// - 10240 Kbps: equal to 10 Mbps.
	// - 20480 Kbps: equal to 20 Mbps.
	// - 51200 Kbps: equal to 50 Mbps.
	// - 102400 Kbps: equal to 100 Mbps.
	// Default value: 10240.
	// This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property description: The description of the asynchronous replication relationship.
	//
	// 2 to 256 English or Chinese characters in length and cannot start with' http:\/\/ 'or' https.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property diskReplicaPairName: The name of the asynchronous replication relationship.
	//
	// The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:\/\/ or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
	DiskReplicaPairName interface{} `field:"optional" json:"diskReplicaPairName" yaml:"diskReplicaPairName"`
	// Property paymentType: The payment type of the resource.
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	// Property period: The purchase duration of the asynchronous replication relationship.
	//
	// This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
	// - When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the purchase time of the asynchronous replication relationship.
	//
	// Value range:
	// - Month.Default value: Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property rpo: The RPO value set by the consistency group in seconds.
	//
	// Currently only 900 seconds are supported.
	Rpo interface{} `field:"optional" json:"rpo" yaml:"rpo"`
	// Property tags: Tags of disk replica pair.
	Tags *[]*RosDiskReplicaPair_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

