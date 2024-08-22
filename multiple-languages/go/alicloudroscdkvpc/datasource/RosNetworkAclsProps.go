package datasource


// Properties for defining a `RosNetworkAcls`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls
type RosNetworkAclsProps struct {
	NetworkAclId interface{} `field:"optional" json:"networkAclId" yaml:"networkAclId"`
	NetworkAclName interface{} `field:"optional" json:"networkAclName" yaml:"networkAclName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceId interface{} `field:"optional" json:"resourceId" yaml:"resourceId"`
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

