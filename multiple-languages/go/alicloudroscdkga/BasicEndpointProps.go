package alicloudroscdkga


// Properties for defining a `BasicEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
type BasicEndpointProps struct {
	// Property acceleratorId: The ID of the basic GA instance.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property endpointAddress: The address of the endpoint.
	EndpointAddress interface{} `field:"required" json:"endpointAddress" yaml:"endpointAddress"`
	// Property endpointGroupId: The ID of the endpoint group.
	EndpointGroupId interface{} `field:"required" json:"endpointGroupId" yaml:"endpointGroupId"`
	// Property endpointSubAddress: The secondary address of the endpoint.
	//
	// This parameter is required if the endpoint type is ECS, ENI, or NLB.
	// If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
	// If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
	// This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
	EndpointSubAddress interface{} `field:"optional" json:"endpointSubAddress" yaml:"endpointSubAddress"`
	// Property endpointSubAddressType: The type of the secondary address of the endpoint.
	//
	// Valid values:
	// primary: a primary private IP address.
	// secondary: a secondary private IP address.
	// This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
	EndpointSubAddressType interface{} `field:"optional" json:"endpointSubAddressType" yaml:"endpointSubAddressType"`
	// Property endpointType: The type of the endpoint.
	//
	// Valid values:
	// ENI: elastic network interface (ENI)
	// SLB: Classic Load Balancer (CLB)
	// NLB: Network Load Balancer (NLB)
	// ECS: Elastic Compute Service (ECS).
	EndpointType interface{} `field:"optional" json:"endpointType" yaml:"endpointType"`
	// Property endpointZoneId: The zone ID of the endpoint.
	//
	// This parameter is required only if the endpoint type is NLB.
	EndpointZoneId interface{} `field:"optional" json:"endpointZoneId" yaml:"endpointZoneId"`
	// Property name: The name of the endpoint that is associated with the basic GA instance.
	//
	// The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

