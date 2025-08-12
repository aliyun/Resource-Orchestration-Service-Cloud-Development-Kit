package datasource


// Properties for defining a `RosServices`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-services
type RosServicesProps struct {
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
}

