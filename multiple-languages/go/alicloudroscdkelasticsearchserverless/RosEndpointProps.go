package alicloudroscdkelasticsearchserverless


// Properties for defining a `RosEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-endpoint
type RosEndpointProps struct {
	EndpointZones interface{} `field:"required" json:"endpointZones" yaml:"endpointZones"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

