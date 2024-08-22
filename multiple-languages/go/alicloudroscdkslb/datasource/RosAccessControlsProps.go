package datasource


// Properties for defining a `RosAccessControls`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrols
type RosAccessControlsProps struct {
	AclName interface{} `field:"optional" json:"aclName" yaml:"aclName"`
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

