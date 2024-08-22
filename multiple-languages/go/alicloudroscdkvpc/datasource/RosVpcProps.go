package datasource


// Properties for defining a `RosVpc`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc
type RosVpcProps struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

