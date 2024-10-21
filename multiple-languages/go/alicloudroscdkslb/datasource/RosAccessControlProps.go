package datasource


// Properties for defining a `RosAccessControl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrol
type RosAccessControlProps struct {
	AclId interface{} `field:"required" json:"aclId" yaml:"aclId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

