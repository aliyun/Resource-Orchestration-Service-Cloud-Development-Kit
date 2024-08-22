package alicloudroscdkprivatelink


// Properties for defining a `RosVpcEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpoint
type RosVpcEndpointProps struct {
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	EndpointDescription interface{} `field:"optional" json:"endpointDescription" yaml:"endpointDescription"`
	EndpointName interface{} `field:"optional" json:"endpointName" yaml:"endpointName"`
	EndpointType interface{} `field:"optional" json:"endpointType" yaml:"endpointType"`
	ProtectedEnabled interface{} `field:"optional" json:"protectedEnabled" yaml:"protectedEnabled"`
	ServiceId interface{} `field:"optional" json:"serviceId" yaml:"serviceId"`
	ServiceName interface{} `field:"optional" json:"serviceName" yaml:"serviceName"`
	Tags *[]*RosVpcEndpoint_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Zone interface{} `field:"optional" json:"zone" yaml:"zone"`
	ZonePrivateIpAddressCount interface{} `field:"optional" json:"zonePrivateIpAddressCount" yaml:"zonePrivateIpAddressCount"`
}

