package alicloudroscdkvpc


// Properties for defining a `Ipv6Gateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6gateway
type Ipv6GatewayProps struct {
	// Property vpcId: To open VPC ID IPv6 gateway.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property description: Description of IPv6 gateway.
	//
	// Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): \/\/ or https: \/\/ at the beginning .
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property name: Name of the IPv6 gateway.
	//
	// Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): \/\/ or with https: \/\/ .
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property spec: Specifications IPv6 gateway, the value: Small (default): Free.
	//
	// Medium: Enterprise Edition.
	// Large: Enterprise Enhanced Edition.
	// Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosIpv6Gateway_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

