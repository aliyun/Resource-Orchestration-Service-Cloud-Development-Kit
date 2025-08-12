package alicloudroscdkvpc


// Properties for defining a `VpcGatewayEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpoint
type VpcGatewayEndpointProps struct {
	// Property serviceName: Terminal service name.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property vpcId: The VPC ID of the gateway endpoint is to be created.
	//
	// The VPC must be in the same region as the gateway endpoint.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property endpointDescription: Description information of the gateway endpoint.
	//
	// The length of the description information is between 1 and 255 characters.
	EndpointDescription interface{} `field:"optional" json:"endpointDescription" yaml:"endpointDescription"`
	// Property endpointName: The name of the gateway endpoint.
	//
	// The length of the name is between 1 and 128 characters.
	EndpointName interface{} `field:"optional" json:"endpointName" yaml:"endpointName"`
	// Property policyDocument: Access policies for cloud services.
	//
	// For the syntax and structure of access policies, see Permission Policy Syntax and Structure.
	// illustrate
	// This field is required when the selected endpoint service supports setting access policies;
	// This field must be empty when the selected endpoint service does not support setting access policies.
	// Whether the terminal node service supports setting access policies can be obtained through the ListVpcEndpointServicesByEndUser interface. SupportPolicy is true to indicate support, otherwise it is not supported.
	PolicyDocument interface{} `field:"optional" json:"policyDocument" yaml:"policyDocument"`
	// Property resourceGroupId: The resource group ID to which the gateway endpoint belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: The list of tags in the form of key\/value pairs.
	//
	// You can define a maximum of 20 tags.
	Tags *[]*RosVpcGatewayEndpoint_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

