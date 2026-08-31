package alicloudroscdkecs


// Properties for defining a `SecurityGroupClone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupclone
type SecurityGroupCloneProps struct {
	// Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group.
	//
	// If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
	SourceSecurityGroupId interface{} `field:"required" json:"sourceSecurityGroupId" yaml:"sourceSecurityGroupId"`
	// Property description: The description of the security group.
	//
	// The description must be 2 to 256
	// characters in length. It cannot start with `http:\/\/` or `https:\/\/`.
	// By default, this parameter is left empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property destinationRegionId: Clone security group to the specified region.
	//
	// Default to current region.
	DestinationRegionId interface{} `field:"optional" json:"destinationRegionId" yaml:"destinationRegionId"`
	// Property networkType: Clone new security group as classic network type.
	//
	// If the VpcId is specified, the value will be ignored.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityGroupName: The name of the security group.
	//
	// The name must be 2 to 128 characters in length.
	// The name must start with a letter and cannot start with `http:\/\/` or `https:\/\/`.
	// The name can contain letters, digits, colons (:), underscores (_), periods (.),
	// and hyphens (-).
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
	// Property securityGroupType: The type of the security group.
	//
	// Valid values:
	// - normal: basic security group
	// - enterprise: advanced security group
	// Default value: normal.
	SecurityGroupType interface{} `field:"optional" json:"securityGroupType" yaml:"securityGroupType"`
	// Property vpcId: The ID of the VPC in which you want to create the security group.
	//
	// > The VpcId parameter is required only if you want to create security groups of
	// the VPC type.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

