package alicloudroscdkapig


// Properties for defining a `Policy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
type PolicyProps struct {
	// Property attachResourceIds: The Mount point id list.
	AttachResourceIds interface{} `field:"required" json:"attachResourceIds" yaml:"attachResourceIds"`
	// Property attachResourceType: Policies support mount point types.
	//
	// HttpApi:HttpApi.
	// Operation: the Operation of the HttpApi.
	// GatewayRoute: Gateway route.
	// GatewayService: Gateway service.
	// GatewayServicePort: The Gateway service port.
	// Domain: The Gateway Domain name.
	// Gateway: Gateway.
	AttachResourceType interface{} `field:"required" json:"attachResourceType" yaml:"attachResourceType"`
	// Property environmentId: The id of the environment.
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	// Property gatewayId: The ID of the Gateway.
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	// Property policyClassName: The name of the policy class.
	PolicyClassName interface{} `field:"required" json:"policyClassName" yaml:"policyClassName"`
	// Property policyConfig: Policy Configuration.
	PolicyConfig interface{} `field:"required" json:"policyConfig" yaml:"policyConfig"`
	// Property policyName: The name of the policy.
	PolicyName interface{} `field:"optional" json:"policyName" yaml:"policyName"`
}

