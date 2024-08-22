package alicloudroscdkga


// Properties for defining a `BasicEndpointGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
type BasicEndpointGroupProps struct {
	// Property acceleratorId: The ID of the basic GA instance.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property endpointGroupRegion: The ID of the region to which the endpoint group belongs.
	EndpointGroupRegion interface{} `field:"required" json:"endpointGroupRegion" yaml:"endpointGroupRegion"`
	// Property description: The description of the endpoint group.
	//
	// The description can be up to 200 characters in length and cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property endpointAddress: The endpoint address.
	EndpointAddress interface{} `field:"optional" json:"endpointAddress" yaml:"endpointAddress"`
	// Property endpointSubAddress: The secondary address of the endpoint.
	//
	// You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
	// When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
	// If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
	EndpointSubAddress interface{} `field:"optional" json:"endpointSubAddress" yaml:"endpointSubAddress"`
	// Property endpointType: The type of the endpoint.
	//
	// Valid values:
	// ENI
	// SLB
	// ECS.
	EndpointType interface{} `field:"optional" json:"endpointType" yaml:"endpointType"`
	// Property name: The name of the endpoint group.
	//
	// The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

