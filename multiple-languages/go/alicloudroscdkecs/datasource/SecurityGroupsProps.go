package datasource


// Properties for defining a `SecurityGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroups
type SecurityGroupsProps struct {
	// Property networkType: The network type of the security group.
	//
	// Valid values:
	// vpc
	// classic.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the instance belongs.
	//
	// If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityGroupId: The ID of the security group.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property securityGroupIds: The IDs of security groups.
	//
	// The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	// Property securityGroupName: The name of the security group.
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
	// Property securityGroupType: The type of the security group.
	//
	// Valid values:
	// normal: basic security group
	// enterprise: advanced security group
	// Note If you do not specify this parameter, both basic and advanced security groups are queried.
	SecurityGroupType interface{} `field:"optional" json:"securityGroupType" yaml:"securityGroupType"`
	// Property tags: Tags of securitygroup.
	Tags *[]*RosSecurityGroups_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

