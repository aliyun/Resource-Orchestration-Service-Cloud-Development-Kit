package alicloudroscdkecs


// Properties for defining a `SecurityGroupClone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupclone
type SecurityGroupCloneProps struct {
	// Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group.
	//
	// If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
	SourceSecurityGroupId interface{} `field:"required" json:"sourceSecurityGroupId" yaml:"sourceSecurityGroupId"`
	// Property description: Description of the security group, [2, 256] characters.
	//
	// Do not fill or empty, the default is empty.
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
	// Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
	// Property securityGroupType: The type of the security group.
	//
	// Valid values:
	// normal: basic security group
	// enterprise: advanced security group.
	SecurityGroupType interface{} `field:"optional" json:"securityGroupType" yaml:"securityGroupType"`
	// Property vpcId: Physical ID of the VPC.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

