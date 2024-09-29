package alicloudroscdkecd


// Properties for defining a `RosNetworkPackageAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
type RosNetworkPackageAssociationProps struct {
	NetworkPackageId interface{} `field:"required" json:"networkPackageId" yaml:"networkPackageId"`
	OfficeSiteId interface{} `field:"required" json:"officeSiteId" yaml:"officeSiteId"`
}

