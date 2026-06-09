package alicloudroscdkapig


// Properties for defining a `HttpApi`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
type HttpApiProps struct {
	// Property httpApiName: The name of the HTTP API.
	HttpApiName interface{} `field:"required" json:"httpApiName" yaml:"httpApiName"`
	// Property agentProtocols: The agent protocols of the HTTP API.
	AgentProtocols interface{} `field:"optional" json:"agentProtocols" yaml:"agentProtocols"`
	// Property aiProtocols: The AI protocols of the HTTP API.
	AiProtocols interface{} `field:"optional" json:"aiProtocols" yaml:"aiProtocols"`
	// Property authConfig: The authentication configuration.
	AuthConfig interface{} `field:"optional" json:"authConfig" yaml:"authConfig"`
	// Property basePath: The base path of the HTTP API.
	BasePath interface{} `field:"optional" json:"basePath" yaml:"basePath"`
	// Property belongGatewayId: The gateway ID that the HTTP API belongs to.
	BelongGatewayId interface{} `field:"optional" json:"belongGatewayId" yaml:"belongGatewayId"`
	// Property builtinRouteNames: The builtin route names.
	BuiltinRouteNames interface{} `field:"optional" json:"builtinRouteNames" yaml:"builtinRouteNames"`
	// Property deployConfigs: The deploy configurations of the HTTP API.
	DeployConfigs interface{} `field:"optional" json:"deployConfigs" yaml:"deployConfigs"`
	// Property description: The description of the HTTP API.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property enableAuth: Whether to enable authentication.
	EnableAuth interface{} `field:"optional" json:"enableAuth" yaml:"enableAuth"`
	// Property firstByteTimeout: The first byte timeout.
	FirstByteTimeout interface{} `field:"optional" json:"firstByteTimeout" yaml:"firstByteTimeout"`
	// Property ingressConfig: The ingress configuration of the HTTP API.
	IngressConfig interface{} `field:"optional" json:"ingressConfig" yaml:"ingressConfig"`
	// Property modelCategory: The model category.
	ModelCategory interface{} `field:"optional" json:"modelCategory" yaml:"modelCategory"`
	// Property onlyChangeConfig: Whether to only change config without triggering redeployment.
	//
	// True means only modify configuration without triggering redeployment.
	OnlyChangeConfig interface{} `field:"optional" json:"onlyChangeConfig" yaml:"onlyChangeConfig"`
	// Property protocols: The protocols supported by the HTTP API.
	Protocols interface{} `field:"optional" json:"protocols" yaml:"protocols"`
	// Property removeBasePathOnForward: Whether to remove the base path on forward.
	RemoveBasePathOnForward interface{} `field:"optional" json:"removeBasePathOnForward" yaml:"removeBasePathOnForward"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property strategy: The strategy of the HTTP API.
	Strategy interface{} `field:"optional" json:"strategy" yaml:"strategy"`
	// Property type: The type of the HTTP API.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	// Property versionConfig: The version configuration of the HTTP API.
	VersionConfig interface{} `field:"optional" json:"versionConfig" yaml:"versionConfig"`
}

