package alicloudroscdkdataworks


// Properties for defining a `RosRoute`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-route
type RosRouteProps struct {
	DestinationCidr interface{} `field:"required" json:"destinationCidr" yaml:"destinationCidr"`
	NetworkId interface{} `field:"required" json:"networkId" yaml:"networkId"`
	DwResourceGroupId interface{} `field:"optional" json:"dwResourceGroupId" yaml:"dwResourceGroupId"`
}

