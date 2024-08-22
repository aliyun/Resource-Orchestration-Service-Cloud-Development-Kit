package alicloudroscdkcen


// Properties for defining a `RosTransitRouter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
type RosTransitRouterProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	TransitRouterDescription interface{} `field:"optional" json:"transitRouterDescription" yaml:"transitRouterDescription"`
	TransitRouterName interface{} `field:"optional" json:"transitRouterName" yaml:"transitRouterName"`
}

