package alicloudroscdkvpc


// Properties for defining a `RosRouteTable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetable
type RosRouteTableProps struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	RouteTableName interface{} `field:"optional" json:"routeTableName" yaml:"routeTableName"`
	Tags *[]*RosRouteTable_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

