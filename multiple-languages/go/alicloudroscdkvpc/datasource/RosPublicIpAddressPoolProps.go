package datasource


// Properties for defining a `RosPublicIpAddressPool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
type RosPublicIpAddressPoolProps struct {
	PublicIpAddressPoolId interface{} `field:"required" json:"publicIpAddressPoolId" yaml:"publicIpAddressPoolId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

