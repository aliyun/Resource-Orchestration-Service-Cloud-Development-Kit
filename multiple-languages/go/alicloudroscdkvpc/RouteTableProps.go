package alicloudroscdkvpc


// Properties for defining a `RouteTable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetable
type RouteTableProps struct {
	// Property vpcId: The ID of the VPC to which the custom route table belongs.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property description: The description of the route table.
	//
	// The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property routeTableName: The name of the route table.
	//
	// The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:\/\/ or https:\/\/.
	RouteTableName interface{} `field:"optional" json:"routeTableName" yaml:"routeTableName"`
	// Property tags: Tags to attach to routetable.
	//
	// Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosRouteTable_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

