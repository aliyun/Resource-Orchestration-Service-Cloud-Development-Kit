package datasource


// Properties for defining a `RosCustomerGateways`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
type RosCustomerGatewaysProps struct {
	CustomerGatewayId interface{} `field:"optional" json:"customerGatewayId" yaml:"customerGatewayId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

