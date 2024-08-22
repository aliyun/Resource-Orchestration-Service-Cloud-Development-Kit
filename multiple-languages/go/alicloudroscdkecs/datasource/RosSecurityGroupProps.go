package datasource


// Properties for defining a `RosSecurityGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
type RosSecurityGroupProps struct {
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

