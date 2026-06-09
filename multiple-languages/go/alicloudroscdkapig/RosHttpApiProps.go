package alicloudroscdkapig


// Properties for defining a `RosHttpApi`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
type RosHttpApiProps struct {
	HttpApiName interface{} `field:"required" json:"httpApiName" yaml:"httpApiName"`
	AgentProtocols interface{} `field:"optional" json:"agentProtocols" yaml:"agentProtocols"`
	AiProtocols interface{} `field:"optional" json:"aiProtocols" yaml:"aiProtocols"`
	AuthConfig interface{} `field:"optional" json:"authConfig" yaml:"authConfig"`
	BasePath interface{} `field:"optional" json:"basePath" yaml:"basePath"`
	BelongGatewayId interface{} `field:"optional" json:"belongGatewayId" yaml:"belongGatewayId"`
	BuiltinRouteNames interface{} `field:"optional" json:"builtinRouteNames" yaml:"builtinRouteNames"`
	DeployConfigs interface{} `field:"optional" json:"deployConfigs" yaml:"deployConfigs"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EnableAuth interface{} `field:"optional" json:"enableAuth" yaml:"enableAuth"`
	FirstByteTimeout interface{} `field:"optional" json:"firstByteTimeout" yaml:"firstByteTimeout"`
	IngressConfig interface{} `field:"optional" json:"ingressConfig" yaml:"ingressConfig"`
	ModelCategory interface{} `field:"optional" json:"modelCategory" yaml:"modelCategory"`
	OnlyChangeConfig interface{} `field:"optional" json:"onlyChangeConfig" yaml:"onlyChangeConfig"`
	Protocols interface{} `field:"optional" json:"protocols" yaml:"protocols"`
	RemoveBasePathOnForward interface{} `field:"optional" json:"removeBasePathOnForward" yaml:"removeBasePathOnForward"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Strategy interface{} `field:"optional" json:"strategy" yaml:"strategy"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	VersionConfig interface{} `field:"optional" json:"versionConfig" yaml:"versionConfig"`
}

