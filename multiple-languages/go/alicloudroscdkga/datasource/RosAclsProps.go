package datasource


// Properties for defining a `RosAcls`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
type RosAclsProps struct {
	AclId interface{} `field:"optional" json:"aclId" yaml:"aclId"`
	AclName interface{} `field:"optional" json:"aclName" yaml:"aclName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

