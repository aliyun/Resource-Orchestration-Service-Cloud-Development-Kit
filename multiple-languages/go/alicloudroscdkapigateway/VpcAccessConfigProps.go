package alicloudroscdkapigateway


// Properties for defining a `VpcAccessConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-vpcaccessconfig
type VpcAccessConfigProps struct {
	// Property instanceId: The id of the instance (ECS\/SLB\/ALB\/NLB).
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property name: The name of one VPC access configuration.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property port: The port of the VPC.
	Port interface{} `field:"required" json:"port" yaml:"port"`
	// Property vpcId: The id of the VPC.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
}

