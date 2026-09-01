package alicloudroscdkvpc


// Properties for defining a `RouteTable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetable
type RouteTableProps struct {
	// Property vpcId: The ID of the VPC to which the custom route table belongs.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property associateType: The type of the route table.
	//
	// Valid values:
	// *   VSwitch (default): vSwitch route table
	// *   Gateway: gateway route table.
	AssociateType interface{} `field:"optional" json:"associateType" yaml:"associateType"`
	// Property description: The description of the route table.
	//
	// The description must be 1 to 256 characters in length, and cannot start with
	// `http:\/\/` or `https:\/\/`.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property routeTableName: The name of the route table.
	//
	// The name must be 1 to 128 characters in length, and cannot start with `http:\/\/`
	// or `https:\/\/`.
	RouteTableName interface{} `field:"optional" json:"routeTableName" yaml:"routeTableName"`
	// Property tags: Tags to attach to routetable.
	//
	// Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosRouteTable_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

