package alicloudroscdkcen


// Properties for defining a `TransitRouter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
type TransitRouterProps struct {
	// Property cenId: CenId.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property transitRouterDescription: TransitRouterDescription.
	TransitRouterDescription interface{} `field:"optional" json:"transitRouterDescription" yaml:"transitRouterDescription"`
	// Property transitRouterName: TransitRouterName.
	TransitRouterName interface{} `field:"optional" json:"transitRouterName" yaml:"transitRouterName"`
}

