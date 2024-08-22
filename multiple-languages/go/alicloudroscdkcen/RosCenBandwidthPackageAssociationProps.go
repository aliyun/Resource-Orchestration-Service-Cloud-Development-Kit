package alicloudroscdkcen


// Properties for defining a `RosCenBandwidthPackageAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackageassociation
type RosCenBandwidthPackageAssociationProps struct {
	CenBandwidthPackageId interface{} `field:"required" json:"cenBandwidthPackageId" yaml:"cenBandwidthPackageId"`
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
}

