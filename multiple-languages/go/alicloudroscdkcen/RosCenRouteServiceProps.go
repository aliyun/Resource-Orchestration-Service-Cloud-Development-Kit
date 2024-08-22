package alicloudroscdkcen


// Properties for defining a `RosCenRouteService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenrouteservice
type RosCenRouteServiceProps struct {
	AccessRegionId interface{} `field:"required" json:"accessRegionId" yaml:"accessRegionId"`
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	Host interface{} `field:"required" json:"host" yaml:"host"`
	HostRegionId interface{} `field:"required" json:"hostRegionId" yaml:"hostRegionId"`
	HostVpcId interface{} `field:"required" json:"hostVpcId" yaml:"hostVpcId"`
	ConflictIgnore interface{} `field:"optional" json:"conflictIgnore" yaml:"conflictIgnore"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

