package datasource


// Properties for defining a `RosAddress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
type RosAddressProps struct {
	AllocationId interface{} `field:"required" json:"allocationId" yaml:"allocationId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

