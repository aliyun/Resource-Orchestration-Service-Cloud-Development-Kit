package alicloudroscdkelasticsearchserverless


// Properties for defining a `Endpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-endpoint
type EndpointProps struct {
	// Property endpointZones: The zone configurations of the endpoint.
	EndpointZones interface{} `field:"required" json:"endpointZones" yaml:"endpointZones"`
	// Property name: The name of the endpoint.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property type: Endpoint type, default value: VPC.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	// Property vpcId: The vpc id of the endpoint.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

