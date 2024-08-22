package datasource


// Properties for defining a `SecurityGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
type SecurityGroupProps struct {
	// Property securityGroupId: Security group ID.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

