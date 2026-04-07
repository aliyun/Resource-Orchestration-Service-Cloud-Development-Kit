package alicloudroscdkhdr


// Properties for defining a `RosSitePair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
type RosSitePairProps struct {
	PrimarySiteName interface{} `field:"required" json:"primarySiteName" yaml:"primarySiteName"`
	PrimarySiteRegionId interface{} `field:"required" json:"primarySiteRegionId" yaml:"primarySiteRegionId"`
	PrimarySiteType interface{} `field:"required" json:"primarySiteType" yaml:"primarySiteType"`
	PrimarySiteVpcId interface{} `field:"required" json:"primarySiteVpcId" yaml:"primarySiteVpcId"`
	SecondarySiteName interface{} `field:"required" json:"secondarySiteName" yaml:"secondarySiteName"`
	SecondarySiteRegionId interface{} `field:"required" json:"secondarySiteRegionId" yaml:"secondarySiteRegionId"`
	SecondarySiteType interface{} `field:"required" json:"secondarySiteType" yaml:"secondarySiteType"`
	SecondarySiteVpcId interface{} `field:"required" json:"secondarySiteVpcId" yaml:"secondarySiteVpcId"`
	PrimarySiteZoneId interface{} `field:"optional" json:"primarySiteZoneId" yaml:"primarySiteZoneId"`
	SecondarySiteZoneId interface{} `field:"optional" json:"secondarySiteZoneId" yaml:"secondarySiteZoneId"`
	SitePairType interface{} `field:"optional" json:"sitePairType" yaml:"sitePairType"`
}

