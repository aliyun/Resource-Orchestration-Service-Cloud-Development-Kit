package alicloudroscdkapig


// Properties for defining a `RosEnvironment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment
type RosEnvironmentProps struct {
	EnvironmentName interface{} `field:"required" json:"environmentName" yaml:"environmentName"`
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

