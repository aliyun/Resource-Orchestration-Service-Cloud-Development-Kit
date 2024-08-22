package datasource


// Properties for defining a `RosAddressBooks`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
type RosAddressBooksProps struct {
	GroupType interface{} `field:"optional" json:"groupType" yaml:"groupType"`
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

