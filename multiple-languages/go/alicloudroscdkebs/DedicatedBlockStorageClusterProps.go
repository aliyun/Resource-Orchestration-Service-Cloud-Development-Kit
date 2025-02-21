package alicloudroscdkebs


// Properties for defining a `DedicatedBlockStorageCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-dedicatedblockstoragecluster
type DedicatedBlockStorageClusterProps struct {
	// Property azone: The ID of the zone in which to create the dedicated block storage cluster.
	Azone interface{} `field:"required" json:"azone" yaml:"azone"`
	// Property capacity: The capacity of the dedicated block storage cluster.
	//
	// Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
	Capacity interface{} `field:"required" json:"capacity" yaml:"capacity"`
	// Property dbscName: The name of the dedicated block storage cluster.
	DbscName interface{} `field:"required" json:"dbscName" yaml:"dbscName"`
	// Property period: The subscription duration of the dedicated block storage cluster.
	//
	// Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
	Period interface{} `field:"required" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration specified by Period.
	//
	// Set the value to Month.
	PeriodUnit interface{} `field:"required" json:"periodUnit" yaml:"periodUnit"`
	// Property type: The type of the dedicated block storage cluster.
	//
	// Valid values:
	// Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
	// Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
	// Default value: Premium.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tag: Tags of dedicated block storage cluster.
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
}

