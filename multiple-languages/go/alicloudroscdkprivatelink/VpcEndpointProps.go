package alicloudroscdkprivatelink


// Properties for defining a `VpcEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpoint
type VpcEndpointProps struct {
	// Property vpcId: The VPC to which the endpoint belongs.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property endpointDescription: The description of the endpoint.
	//
	// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	EndpointDescription interface{} `field:"optional" json:"endpointDescription" yaml:"endpointDescription"`
	// Property endpointName: The name of the endpoint.
	//
	// The name must be 2 to 128 characters long, start with a letter or a Chinese
	// character, and can contain digits, hyphens (-), and underscores (_).
	EndpointName interface{} `field:"optional" json:"endpointName" yaml:"endpointName"`
	// Property endpointType: The type of the endpoint.
	//
	// Valid values:
	// - Interface: an interface endpoint. You can add Application Load Balancer (ALB),
	//   CLB, and Network Load Balancer (NLB) instances as service
	// resources.
	// - Reverse: a reverse endpoint. You can add a VPC NAT Gateway as a service
	// resource.
	// - GatewayLoadBalancer: a Gateway Load Balancer endpoint. You can add a Gateway
	// Load Balancer (GWLB) as a service resource.
	// > Services that support reverse endpoints are provided exclusively by the cloud
	// platform and its partners. You cannot create them by default. To request access,
	// contact your account manager.
	EndpointType interface{} `field:"optional" json:"endpointType" yaml:"endpointType"`
	// Property protectedEnabled: Specifies whether to enable user authentication.
	//
	// This parameter is available in Security Token Service (STS) mode. Valid values:
	// true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
	// false (default): no.
	ProtectedEnabled interface{} `field:"optional" json:"protectedEnabled" yaml:"protectedEnabled"`
	// Property securityGroupId: The security group associated with the endpoint network interface.
	//
	// The security group can control the data communication from the VPC to the endpoint network interface.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property serviceId: The endpoint service that is associated with the endpoint.
	//
	// One of ServiceId and ServiceName is required.
	ServiceId interface{} `field:"optional" json:"serviceId" yaml:"serviceId"`
	// Property serviceName: The name of the endpoint service that is associated with the endpoint.
	//
	// One of ServiceId and ServiceName is required.
	ServiceName interface{} `field:"optional" json:"serviceName" yaml:"serviceName"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosVpcEndpoint_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property zone: The list of zones for the endpoint.
	Zone interface{} `field:"optional" json:"zone" yaml:"zone"`
	// Property zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone.
	//
	// Set the value to 1.
	ZonePrivateIpAddressCount interface{} `field:"optional" json:"zonePrivateIpAddressCount" yaml:"zonePrivateIpAddressCount"`
}

