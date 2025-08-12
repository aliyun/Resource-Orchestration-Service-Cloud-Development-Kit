package datasource


// Properties for defining a `Services`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-services
type ServicesProps struct {
	// Property gatewayId: The ID of the Cloud Native API Gateway.
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property sourceType: service source type, optional value is K8S\/MSE_NACOS\/FC3\/SAE_K8S_SERVICE\/VIP\/DNS\/AI.
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
}

