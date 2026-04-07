package alicloudroscdkhdr


// Properties for defining a `SitePair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
type SitePairProps struct {
	// Property primarySiteName: The name of the primary site.
	PrimarySiteName interface{} `field:"required" json:"primarySiteName" yaml:"primarySiteName"`
	// Property primarySiteRegionId: The region ID of the primary site.
	PrimarySiteRegionId interface{} `field:"required" json:"primarySiteRegionId" yaml:"primarySiteRegionId"`
	// Property primarySiteType: The type of the primary site.
	//
	// Valid values: VPC, VSwitch, VRouter.
	PrimarySiteType interface{} `field:"required" json:"primarySiteType" yaml:"primarySiteType"`
	// Property primarySiteVpcId: The VPC ID of the primary site.
	PrimarySiteVpcId interface{} `field:"required" json:"primarySiteVpcId" yaml:"primarySiteVpcId"`
	// Property secondarySiteName: The name of the secondary site.
	SecondarySiteName interface{} `field:"required" json:"secondarySiteName" yaml:"secondarySiteName"`
	// Property secondarySiteRegionId: The region ID of the secondary site.
	SecondarySiteRegionId interface{} `field:"required" json:"secondarySiteRegionId" yaml:"secondarySiteRegionId"`
	// Property secondarySiteType: The type of the secondary site.
	//
	// Valid values: VPC, VSwitch, VRouter.
	SecondarySiteType interface{} `field:"required" json:"secondarySiteType" yaml:"secondarySiteType"`
	// Property secondarySiteVpcId: The VPC ID of the secondary site.
	SecondarySiteVpcId interface{} `field:"required" json:"secondarySiteVpcId" yaml:"secondarySiteVpcId"`
	// Property primarySiteZoneId: The zone ID of the primary site.
	PrimarySiteZoneId interface{} `field:"optional" json:"primarySiteZoneId" yaml:"primarySiteZoneId"`
	// Property secondarySiteZoneId: The zone ID of the secondary site.
	SecondarySiteZoneId interface{} `field:"optional" json:"secondarySiteZoneId" yaml:"secondarySiteZoneId"`
	// Property sitePairType: The type of the site pair.
	SitePairType interface{} `field:"optional" json:"sitePairType" yaml:"sitePairType"`
}

