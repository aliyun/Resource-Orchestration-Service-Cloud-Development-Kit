package alicloudroscdkcomputenest


// Properties for defining a `IntranetConnectorEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
type IntranetConnectorEndpointProps struct {
	// Property endpointRegionId: The region ID of the endpoint.
	EndpointRegionId interface{} `field:"required" json:"endpointRegionId" yaml:"endpointRegionId"`
	// Property vpcId: The ID of the VPC to which the endpoint belongs.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property description: The description of the endpoint, supporting full character set.
	//
	// The length must not exceed 500 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property enablePrivateZone: Whether to enable the private zone.
	//
	// This parameter is only valid when the access point type is Managed.
	EnablePrivateZone interface{} `field:"optional" json:"enablePrivateZone" yaml:"enablePrivateZone"`
	// Property name: The name of the endpoint, supporting full character set except space.
	//
	// The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS.
	//
	// Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
	// Hosted access points do not require incoming.
	ResourceIds interface{} `field:"optional" json:"resourceIds" yaml:"resourceIds"`
	// Property type: The type of the endpoint.
	//
	// - Private (default) : private access point
	// - Managed: managed access point.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

