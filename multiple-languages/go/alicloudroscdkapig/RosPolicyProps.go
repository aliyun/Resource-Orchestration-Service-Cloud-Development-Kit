package alicloudroscdkapig


// Properties for defining a `RosPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
type RosPolicyProps struct {
	AttachResourceIds interface{} `field:"required" json:"attachResourceIds" yaml:"attachResourceIds"`
	AttachResourceType interface{} `field:"required" json:"attachResourceType" yaml:"attachResourceType"`
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	PolicyClassName interface{} `field:"required" json:"policyClassName" yaml:"policyClassName"`
	PolicyConfig interface{} `field:"required" json:"policyConfig" yaml:"policyConfig"`
	PolicyName interface{} `field:"optional" json:"policyName" yaml:"policyName"`
}

