package alicloudroscdkapig


// Properties for defining a `Environment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment
type EnvironmentProps struct {
	// Property environmentName: The name of the environment.
	EnvironmentName interface{} `field:"required" json:"environmentName" yaml:"environmentName"`
	// Property gatewayId: Gateway id.
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	// Property description: Description of the environment, which can include information such as the purpose of the environment and its owner.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

