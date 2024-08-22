package datasource


// Properties for defining a `RosAcl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acl
type RosAclProps struct {
	AclId interface{} `field:"required" json:"aclId" yaml:"aclId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

