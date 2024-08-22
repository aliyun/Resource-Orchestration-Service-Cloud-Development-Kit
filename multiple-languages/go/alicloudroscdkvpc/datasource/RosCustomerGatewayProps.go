package datasource


// Properties for defining a `RosCustomerGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
type RosCustomerGatewayProps struct {
	CustomerGatewayId interface{} `field:"required" json:"customerGatewayId" yaml:"customerGatewayId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

