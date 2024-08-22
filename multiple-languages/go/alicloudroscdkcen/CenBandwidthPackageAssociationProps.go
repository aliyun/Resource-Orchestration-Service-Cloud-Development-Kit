package alicloudroscdkcen


// Properties for defining a `CenBandwidthPackageAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackageassociation
type CenBandwidthPackageAssociationProps struct {
	// Property cenBandwidthPackageId: The ID of the bandwidth package.
	CenBandwidthPackageId interface{} `field:"required" json:"cenBandwidthPackageId" yaml:"cenBandwidthPackageId"`
	// Property cenId: The ID of the CEN instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
}

