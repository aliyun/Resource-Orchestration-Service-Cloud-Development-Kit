package alicloudroscdkcen


// Properties for defining a `CenRouteService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenrouteservice
type CenRouteServiceProps struct {
	// Property accessRegionId: The region where the cloud service is deployed.
	AccessRegionId interface{} `field:"required" json:"accessRegionId" yaml:"accessRegionId"`
	// Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property host: The domain or IP address of the cloud service.
	Host interface{} `field:"required" json:"host" yaml:"host"`
	// Property hostRegionId: The region where the cloud service is deployed.
	//
	// You can call the DescribeRegions operation to query region IDs.
	// Note The HostRegionId and AccessRegionIds.N must be set to the same value.
	HostRegionId interface{} `field:"required" json:"hostRegionId" yaml:"hostRegionId"`
	// Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
	HostVpcId interface{} `field:"required" json:"hostVpcId" yaml:"hostVpcId"`
	// Property conflictIgnore: Whether to ignore conflict when creating.
	//
	// If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
	// Default false.
	ConflictIgnore interface{} `field:"optional" json:"conflictIgnore" yaml:"conflictIgnore"`
	// Property description: The description of the cloud service.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

