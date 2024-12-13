package datasource


// Properties for defining a `RosIpfilter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilter
type RosIpfilterProps struct {
	IpfilterId interface{} `field:"required" json:"ipfilterId" yaml:"ipfilterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

