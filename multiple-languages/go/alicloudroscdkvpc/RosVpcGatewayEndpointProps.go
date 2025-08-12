package alicloudroscdkvpc


// Properties for defining a `RosVpcGatewayEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpoint
type RosVpcGatewayEndpointProps struct {
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	EndpointDescription interface{} `field:"optional" json:"endpointDescription" yaml:"endpointDescription"`
	EndpointName interface{} `field:"optional" json:"endpointName" yaml:"endpointName"`
	PolicyDocument interface{} `field:"optional" json:"policyDocument" yaml:"policyDocument"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosVpcGatewayEndpoint_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

