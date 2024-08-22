package datasource


// Properties for defining a `RosAnycastEipAddress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eipanycast-anycasteipaddress
type RosAnycastEipAddressProps struct {
	AnycastId interface{} `field:"required" json:"anycastId" yaml:"anycastId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

