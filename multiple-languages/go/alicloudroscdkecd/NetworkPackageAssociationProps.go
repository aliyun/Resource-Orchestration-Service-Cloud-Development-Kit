package alicloudroscdkecd


// Properties for defining a `NetworkPackageAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
type NetworkPackageAssociationProps struct {
	// Property networkPackageId: The ID of the Internet access package.
	NetworkPackageId interface{} `field:"required" json:"networkPackageId" yaml:"networkPackageId"`
	// Property officeSiteId: The ID of the workspace.
	OfficeSiteId interface{} `field:"required" json:"officeSiteId" yaml:"officeSiteId"`
}

