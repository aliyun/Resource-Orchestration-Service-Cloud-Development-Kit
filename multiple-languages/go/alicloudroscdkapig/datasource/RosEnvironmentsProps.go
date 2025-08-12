package datasource


// Properties for defining a `RosEnvironments`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-environments
type RosEnvironmentsProps struct {
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

