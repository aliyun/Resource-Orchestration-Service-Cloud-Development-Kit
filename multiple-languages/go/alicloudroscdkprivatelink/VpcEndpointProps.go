package alicloudroscdkprivatelink


// Properties for defining a `VpcEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpoint
type VpcEndpointProps struct {
	// Property securityGroupId: The security group associated with the endpoint network interface.
	//
	// The security group can control the data communication from the VPC to the endpoint network interface.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	// Property vpcId: The VPC to which the endpoint belongs.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property endpointDescription: The description of the endpoint.
	//
	// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	EndpointDescription interface{} `field:"optional" json:"endpointDescription" yaml:"endpointDescription"`
	// Property endpointName: The name of the endpoint.
	//
	// The name must be 2 to 128 characters in length and can contain digits, underscores
	// (_), and hyphens (-). The name must start with a letter.
	EndpointName interface{} `field:"optional" json:"endpointName" yaml:"endpointName"`
	// Property endpointType: Endpoint type.
	EndpointType interface{} `field:"optional" json:"endpointType" yaml:"endpointType"`
	// Property protectedEnabled: Specifies whether to enable user authentication.
	//
	// This parameter is available in Security Token Service (STS) mode. Valid values:
	// true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
	// false (default): no.
	ProtectedEnabled interface{} `field:"optional" json:"protectedEnabled" yaml:"protectedEnabled"`
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
	// Property zone:.
	Zone interface{} `field:"optional" json:"zone" yaml:"zone"`
	// Property zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone.
	//
	// Set the value to 1.
	ZonePrivateIpAddressCount interface{} `field:"optional" json:"zonePrivateIpAddressCount" yaml:"zonePrivateIpAddressCount"`
}

