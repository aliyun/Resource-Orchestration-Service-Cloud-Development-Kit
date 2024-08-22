package datasource


// Properties for defining a `RosPublicIpAddressPools`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools
type RosPublicIpAddressPoolsProps struct {
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
	PublicIpAddressPoolName interface{} `field:"optional" json:"publicIpAddressPoolName" yaml:"publicIpAddressPoolName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

