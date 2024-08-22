package alicloudroscdkcr


// Properties for defining a `InstanceEndpointAclPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
type InstanceEndpointAclPolicyProps struct {
	// Property entry: The IP address range that is allowed to access the instance.
	Entry interface{} `field:"required" json:"entry" yaml:"entry"`
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property comment: The description of the entry.
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	// Property endpointType: The type of the endpoint.
	EndpointType interface{} `field:"optional" json:"endpointType" yaml:"endpointType"`
	// Property moduleName: The name of the module in the instance for which a whitelist is configured.
	//
	// Valid
	// values: Registry and Chart.
	ModuleName interface{} `field:"optional" json:"moduleName" yaml:"moduleName"`
	// Property regionId: Region ID of instance.
	//
	// Default is current region.
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
}

