package datasource


// Properties for defining a `RosGateways`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-gateways
type RosGatewaysProps struct {
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	GatewayType interface{} `field:"optional" json:"gatewayType" yaml:"gatewayType"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Vpc interface{} `field:"optional" json:"vpc" yaml:"vpc"`
}

