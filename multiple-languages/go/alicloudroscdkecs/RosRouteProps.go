package alicloudroscdkecs


// Properties for defining a `RosRoute`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
type RosRouteProps struct {
	DestinationCidrBlock interface{} `field:"required" json:"destinationCidrBlock" yaml:"destinationCidrBlock"`
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	NextHopId interface{} `field:"optional" json:"nextHopId" yaml:"nextHopId"`
	NextHopList interface{} `field:"optional" json:"nextHopList" yaml:"nextHopList"`
	NextHopType interface{} `field:"optional" json:"nextHopType" yaml:"nextHopType"`
}

