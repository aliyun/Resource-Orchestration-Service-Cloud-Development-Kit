package datasource


// Properties for defining a `RosGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateway
type RosGatewayProps struct {
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

