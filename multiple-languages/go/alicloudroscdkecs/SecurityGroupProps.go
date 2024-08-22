package alicloudroscdkecs


// Properties for defining a `SecurityGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroup
type SecurityGroupProps struct {
	// Property description: Description of the security group, [2, 256] characters.
	//
	// Do not fill or empty, the default is empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityGroupEgress: egress rules for the security group.
	SecurityGroupEgress interface{} `field:"optional" json:"securityGroupEgress" yaml:"securityGroupEgress"`
	// Property securityGroupIngress: Ingress rules for the security group.
	SecurityGroupIngress interface{} `field:"optional" json:"securityGroupIngress" yaml:"securityGroupIngress"`
	// Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
	// Property securityGroupType: The type of the security group.
	//
	// Valid values:
	// normal: basic security group
	// enterprise: advanced security group.
	SecurityGroupType interface{} `field:"optional" json:"securityGroupType" yaml:"securityGroupType"`
	// Property tags: Tags to attach to security group.
	//
	// Max support 20 tags to add during create security group. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosSecurityGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: Physical ID of the VPC.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

