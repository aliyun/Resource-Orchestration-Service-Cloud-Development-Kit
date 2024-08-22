package datasource


// Properties for defining a `Zones`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
type ZonesProps struct {
	// Property addressIpVersion: The type of IP address.
	//
	// Valid values: ipv4 and ipv6.
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	// Property addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet.. vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC). classic_internet: a public-facing SLB instance. classic_intranet: an internal SLB instance that is deployed in a classic network.
	AddressType interface{} `field:"optional" json:"addressType" yaml:"addressType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

