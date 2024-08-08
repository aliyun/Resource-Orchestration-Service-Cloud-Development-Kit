package alicloudroscdkcen


// Properties for defining a `RosRouteEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
type RosRouteEntryProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	ChildInstanceId interface{} `field:"required" json:"childInstanceId" yaml:"childInstanceId"`
	ChildInstanceRegionId interface{} `field:"required" json:"childInstanceRegionId" yaml:"childInstanceRegionId"`
	ChildInstanceRouteTableId interface{} `field:"required" json:"childInstanceRouteTableId" yaml:"childInstanceRouteTableId"`
	ChildInstanceType interface{} `field:"required" json:"childInstanceType" yaml:"childInstanceType"`
	DestinationCidrBlock interface{} `field:"required" json:"destinationCidrBlock" yaml:"destinationCidrBlock"`
}

